import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DSceneProps {
  className?: string;
}

export const Hero3DScene: React.FC<Hero3DSceneProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect software WebGL safely
    const isSoftwareGl = (() => {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!gl) return true;
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param));
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      return /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    })();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070709, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isSoftwareGl,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Root 3D Object Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- 1. CORE FUTURISTIC ICOSAHEDRON ---
    const coreGeometry = new THREE.IcosahedronGeometry(1.35, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0c130d,
      roughness: 0.25,
      metalness: 0.85,
      emissive: 0x142805,
      emissiveIntensity: 0.4,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // Wireframe overlay for futuristic tech aesthetic
    const wireGeometry = new THREE.IcosahedronGeometry(1.37, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xccff00,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    coreMesh.add(wireMesh);

    // --- 2. INNER GLOWING OCTAHEDRON NUCLEUS ---
    const innerGeometry = new THREE.OctahedronGeometry(0.7, 0);
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: 0xccff00,
      emissive: 0xb4f400,
      emissiveIntensity: 0.9,
      roughness: 0.1,
      metalness: 0.9,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    coreMesh.add(innerMesh);

    // --- 3. NEON-LIME CYBER RINGS ---
    const ringsGroup = new THREE.Group();
    mainGroup.add(ringsGroup);

    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xccff00,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00ff66,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });

    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });

    // Primary Neon Ring
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.025, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.35;
    ring1.rotation.y = Math.PI * 0.15;
    ringsGroup.add(ring1);

    // Secondary Neon Ring
    const ringGeo2 = new THREE.TorusGeometry(2.65, 0.02, 16, 120);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI * 0.25;
    ring2.rotation.y = Math.PI * 0.45;
    ringsGroup.add(ring2);

    // Outer Thin Orbit Ring
    const ringGeo3 = new THREE.TorusGeometry(3.2, 0.015, 16, 120);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.x = Math.PI * 0.6;
    ring3.rotation.z = Math.PI * 0.3;
    ringsGroup.add(ring3);

    // --- 4. ORBITING NODES / SATELLITES ---
    const satellitesGroup = new THREE.Group();
    mainGroup.add(satellitesGroup);

    const satGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0xccff00,
      emissive: 0xccff00,
      emissiveIntensity: 1.2,
      roughness: 0.2,
    });

    const satelliteCount = 6;
    const satellites: THREE.Mesh[] = [];

    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      const angle = (i / satelliteCount) * Math.PI * 2;
      const radius = 2.1 + (i % 2) * 0.55;
      sat.position.set(Math.cos(angle) * radius, Math.sin(angle * 1.5) * 0.5, Math.sin(angle) * radius);
      satellitesGroup.add(sat);
      satellites.push(sat);
    }

    // --- 5. FLOATING PARTICLES SYSTEM ---
    const particleCount = isSoftwareGl ? 120 : 380;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleScales[i] = Math.random() * 0.8 + 0.2;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('scale', new THREE.BufferAttribute(particleScales, 1));

    // Particle Texture via Canvas
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(204, 255, 0, 0.8)');
      gradient.addColorStop(0.7, 'rgba(0, 255, 102, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    const particleTexture = createParticleTexture();
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      map: particleTexture || undefined,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xccff00,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // --- 6. LIGHTING RIG ---
    const ambientLight = new THREE.AmbientLight(0x0a100a, 1.2);
    scene.add(ambientLight);

    const limeKeyLight = new THREE.DirectionalLight(0xccff00, 3.5);
    limeKeyLight.position.set(4, 5, 5);
    scene.add(limeKeyLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00ffaa, 2.0);
    cyanRimLight.position.set(-4, -3, -4);
    scene.add(cyanRimLight);

    const pointLight = new THREE.PointLight(0xccff00, 2.5, 8);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Position adjustments for layout balance
    // Shift slightly right on desktop so text on the left stays clear
    const updateGroupPosition = () => {
      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      if (isMobile) {
        mainGroup.position.set(0, 0.2, 0);
        mainGroup.scale.set(0.75, 0.75, 0.75);
      } else if (isTablet) {
        mainGroup.position.set(1.2, 0, 0);
        mainGroup.scale.set(0.9, 0.9, 0.9);
      } else {
        mainGroup.position.set(2.0, 0, 0);
        mainGroup.scale.set(1.15, 1.15, 1.15);
      }
    };
    updateGroupPosition();

    // Mouse Parallax Interaction
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = nx * 0.4;
      targetMouseY = ny * 0.3;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Scroll Reaction
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      updateGroupPosition();
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Exponential smooth damping for mouse parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Base rotations
      coreMesh.rotation.x += delta * 0.25;
      coreMesh.rotation.y += delta * 0.35;

      wireMesh.rotation.x -= delta * 0.15;
      wireMesh.rotation.y += delta * 0.2;

      innerMesh.rotation.y -= delta * 0.6;
      innerMesh.rotation.z += delta * 0.4;

      ring1.rotation.z += delta * 0.4;
      ring2.rotation.z -= delta * 0.3;
      ring3.rotation.y += delta * 0.2;

      satellitesGroup.rotation.y += delta * 0.35;
      satellitesGroup.rotation.x = Math.sin(elapsedTime * 0.5) * 0.2;

      // Particle constellation spin
      particles.rotation.y -= delta * 0.08;
      particles.rotation.x += delta * 0.04;

      // Combined mouse and scroll effect
      const scrollRotation = scrollY * 0.0012;
      mainGroup.rotation.y = currentMouseX + scrollRotation;
      mainGroup.rotation.x = -currentMouseY * 0.6 + Math.sin(elapsedTime * 0.4) * 0.05;
      mainGroup.position.y = (window.innerWidth < 768 ? 0.2 : 0) + currentMouseY * 0.2 + Math.cos(elapsedTime * 0.6) * 0.08;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      // Dispose Three.js resources
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringGeo3.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      satGeo.dispose();
      satMat.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (particleTexture) particleTexture.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    />
  );
};
