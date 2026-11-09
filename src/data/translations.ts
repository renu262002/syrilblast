export type Language = 'en' | 'ta';

export interface TranslationContent {
  nav: {
    about: string;
    process: string;
    services: string;
    discount: string;
    pricing: string;
    contact: string;
    enquireNow: string;
  };
  hero: {
    diwaliSpecial: string;
    subEyebrow: string;
    headlinePart1: string;
    headlineHighlight: string;
    packageTitle: string;
    intro: string;
    subIntro: string;
    price: string;
    pricePeriod: string;
    priceSub: string;
    deadlineNotice: string;
    deadlineExpired: string;
    noHiddenCharges: string;
    noCommitment: string;
    webDiscountPill: string;
    getStartedBtn: string;
    downloadBrochureBtn: string;
    whatsappEnquiryBtn: string;
    tagline: string;
    taglineHighlight: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    offerEndsOn: string;
    expiredTitle: string;
    expiredDesc: string;
  };
  about: {
    eyebrow: string;
    headingMain: string;
    headingHighlight: string;
    intro: string;
    p1: string;
    p2: string;
    goalEyebrow: string;
    goalText: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
  };
  process: {
    eyebrow: string;
    headingMain: string;
    headingHighlight: string;
    intro: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
    footerText: string;
  };
  services: {
    eyebrow: string;
    headingMain: string;
    headingHighlight: string;
    intro: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      category: string;
    }>;
    disclaimerStrong: string;
    disclaimerText: string;
  };
  discount: {
    eyebrow: string;
    headingMain: string;
    headingHighlight: string;
    subheading: string;
    discountPercent: string;
    discountLabel: string;
    discountSublabel: string;
    featureTag: string;
    cardHeading: string;
    cardDesc: string;
    cardHighlight: string;
    benefitsTitle: string;
    benefitsHeading: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    confidenceHeading: string;
    confidenceSub: string;
  };
  transparency: {
    eyebrow: string;
    headingMain: string;
    headingHighlight: string;
    intro: string;
    termsTitle: string;
    term1: string;
    term2: string;
    term3: string;
    guaranteeTitle: string;
    guaranteeText: string;
  };
  finalCta: {
    eyebrow: string;
    headingMain: string;
    headingHighlight: string;
    introLead: string;
    introBody: string;
    offerBadge: string;
    packageName: string;
    price: string;
    pricePeriod: string;
    readyHeading: string;
    readyHighlight: string;
    callNowBtn: string;
    emailBtn: string;
    whatsappBtn: string;
    downloadBtn: string;
    directCallLabel: string;
    togetherText: string;
    brandTitle: string;
    websiteLabel: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    disclaimer: string;
    copyright: string;
  };
}

export const translations: Record<Language, TranslationContent> = {
  en: {
    nav: {
      about: 'About Package',
      process: 'Our Process',
      services: 'Services',
      discount: '25% Discount',
      pricing: 'Pricing',
      contact: 'Contact',
      enquireNow: 'Get Started',
    },
    hero: {
      diwaliSpecial: 'DIWALI SPECIAL',
      subEyebrow: 'DIGITAL MARKETING FOR YOUR BUSINESS',
      headlinePart1: 'Diwali Blast',
      headlineHighlight: 'Package.',
      packageTitle: 'DIWALI BLAST PACKAGE',
      intro: 'This Diwali, take the first step towards a stronger online presence.',
      subIntro:
        'Every business has different goals, customers, and challenges. We learn what yours needs and build a marketing plan to help you reach the right customers.',
      price: '₹10,749',
      pricePeriod: 'FIRST MONTH ONLY',
      priceSub: 'Digital marketing package',
      deadlineNotice: 'THIS PACKAGE OFFER ENDS ON NOVEMBER 30, 2026.',
      deadlineExpired: 'THIS SPECIAL PACKAGE OFFER HAS ENDED.',
      noHiddenCharges: 'No hidden charges',
      noCommitment: 'No long-term commitment',
      webDiscountPill: 'Includes 25% off website development service fees.',
      getStartedBtn: 'Start Growing',
      downloadBrochureBtn: 'Download Brochure',
      whatsappEnquiryBtn: 'WhatsApp Enquiry',
      tagline: 'YOUR BUSINESS. OUR STRATEGY.',
      taglineHighlight: "LET'S GROW TOGETHER!",
    },
    countdown: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Mins',
      seconds: 'Secs',
      offerEndsOn: 'Offer Ends November 30, 2026 (11:59 PM IST)',
      expiredTitle: 'Special Package Offer Ended',
      expiredDesc:
        'The festive package promotion has concluded. You can still reach out to our team for custom digital marketing and website solutions.',
    },
    about: {
      eyebrow: '01 / THE SYRIL APPROACH',
      headingMain: 'Every business is different.',
      headingHighlight: 'So is our strategy!',
      intro: 'Every business has different goals, customers, and challenges.',
      p1: 'At Syril Infotech, we first understand your business and identify the digital marketing support you need.',
      p2: 'We create a customized marketing plan based on your business needs. You get services that are right for your business, not a one-size-fits-all package.',
      goalEyebrow: 'OUR GOAL IS SIMPLE',
      goalText:
        'To help your business build a stronger online presence and reach the right customers.',
      stat1Number: '100%',
      stat1Label: 'Tailored Marketing Scope',
      stat2Number: '0',
      stat2Label: 'Hidden Or Surprise Fees',
      stat3Number: '25%',
      stat3Label: 'Off Website Development',
    },
    process: {
      eyebrow: '01 / THE PROCESS',
      headingMain: 'Your business.',
      headingHighlight: 'One clear plan.',
      intro:
        'We start by understanding your business, then choose the digital marketing activities that fit your goals.',
      steps: [
        {
          number: '01',
          title: 'Understand your business',
          description:
            'We learn about your products, services, customers, and goals.',
        },
        {
          number: '02',
          title: 'Check your online presence',
          description:
            'We review your social media pages, Google Business Profile, and website, if available.',
        },
        {
          number: '03',
          title: 'Find what you need',
          description:
            'We identify opportunities and where your online presence can improve.',
        },
        {
          number: '04',
          title: 'Create your marketing plan',
          description:
            'We select suitable services and agree on the work, deliverables, and timeline with you.',
        },
        {
          number: '05',
          title: 'Start the work',
          description:
            'We begin the agreed activities and share updates on the work and next steps.',
        },
      ],
      footerText: 'A CLEAR PROCESS. A STRONGER DIGITAL PRESENCE.',
    },
    services: {
      eyebrow: '02 / SERVICES AND BENEFITS',
      headingMain: 'Services for',
      headingHighlight: 'your business',
      intro:
        'We select and agree on the final services and deliverables with you before work begins.',
      items: [
        {
          id: 'meta-ads',
          title: 'Meta Ads',
          description:
            'Reach potential customers on Facebook and Instagram.',
          category: 'Paid Growth',
        },
        {
          id: 'google-ads',
          title: 'Google Ads',
          description:
            'Reach people searching for your products or services.',
          category: 'Search Marketing',
        },
        {
          id: 'local-seo',
          title: 'Local SEO',
          description:
            'Help nearby customers discover your business online.',
          category: 'Organic Visibility',
        },
        {
          id: 'gbp',
          title: 'Google Business Profile',
          description:
            'Improve your listing on Google Search and Maps.',
          category: 'Local Search',
        },
        {
          id: 'social-media',
          title: 'Social Media Improvement',
          description:
            'Keep your pages attractive, active, and professional.',
          category: 'Brand Presence',
        },
        {
          id: 'creative',
          title: 'Content and Creative Support',
          description:
            'Create social posts and marketing materials.',
          category: 'Design & Copy',
        },
      ],
      disclaimerStrong: 'PLEASE NOTE:',
      disclaimerText:
        'We select and agree on the final services and deliverables with you before work begins.',
    },
    discount: {
      eyebrow: 'SPECIAL DIWALI BENEFIT',
      headingMain: 'MORE VALUE.',
      headingHighlight: 'MORE REASONS TO CELEBRATE!',
      subheading:
        'Enjoy more value with your Diwali Blast package. Discover the extra benefits, flexible commitment and clear pricing that help you start with confidence.',
      discountPercent: '25%',
      discountLabel: 'OFF',
      discountSublabel: 'Website development service fees',
      featureTag: 'AN EXTRA BENEFIT FOR YOUR BUSINESS',
      cardHeading: 'Website Development at 25% OFF',
      cardDesc:
        'Give your business a professional online presence for less. Get 25% off our website development service fees if your business needs a website.',
      cardHighlight: 'Save on responsive, high-speed agency web design.',
      benefitsTitle: 'THE EXTRA ADVANTAGES',
      benefitsHeading: 'MORE BENEFITS. MORE CONFIDENCE.',
      benefit1Title: 'No Hidden Charges',
      benefit1Desc:
        'We explain costs before work starts. You know what to expect from the start.',
      benefit2Title: 'No Long-Term Commitment',
      benefit2Desc:
        'You decide after the first month. Experience our work and results with zero lock-in.',
      confidenceHeading: 'START WITH CONFIDENCE. GROW WITH THE RIGHT SUPPORT!',
      confidenceSub:
        'Clear pricing. Flexible commitment. The right digital support for your business.',
    },
    transparency: {
      eyebrow: 'TRANSPARENCY & CLARITY',
      headingMain: 'Clear Terms.',
      headingHighlight: 'Zero Ambiguity.',
      intro:
        'We believe trust is built on upfront clarity. Here are the clear guidelines governing our Diwali Blast package:',
      termsTitle: 'Important Information & Conditions',
      term1:
        'Meta and Google advertising budgets are separate from our agency service package fee.',
      term2:
        'Website development is quoted separately with the applicable 25% discount on service fees.',
      term3:
        'Final services, deliverables, and timelines are selected and mutually agreed upon before work begins.',
      guaranteeTitle: 'First Month Only Flexibility',
      guaranteeText:
        'At ₹10,749 for the first month, you get full agency attention without any mandatory renewals or binding annual commitments.',
    },
    finalCta: {
      eyebrow: 'SYRIL INFOTECH',
      headingMain: 'YOUR NEXT CHAPTER',
      headingHighlight: 'STARTS HERE!',
      introLead: 'MAKE THIS DIWALI THE START OF SOMETHING BIG!',
      introBody:
        'Your business deserves to shine brighter. Take the first step towards building a stronger online presence with Syril Infotech.',
      offerBadge: 'YOUR FESTIVE GROWTH OFFER',
      packageName: 'DIWALI BLAST',
      price: '₹10,749',
      pricePeriod: 'FIRST MONTH ONLY',
      readyHeading: 'READY TO',
      readyHighlight: 'GROW YOUR BUSINESS?',
      callNowBtn: 'Call Now',
      emailBtn: 'Send an Email',
      whatsappBtn: 'WhatsApp Enquiry',
      downloadBtn: 'Download Brochure (PDF)',
      directCallLabel: 'Speak directly with our team:',
      togetherText: "LET'S GROW TOGETHER!",
      brandTitle: 'SYRIL INFOTECH',
      websiteLabel: 'Visit Our Website',
      emailLabel: 'Email Us',
      phoneLabel: 'Call Our Team',
      addressLabel: 'Office Location',
      disclaimer:
        'Meta and Google advertising spend is separate. Website development is charged separately after the applicable discount. Services are finalized based on your business needs.',
      copyright: '© 2026 SYRIL INFOTECH · LET YOUR BUSINESS SHINE BRIGHTER',
    },
  },
  ta: {
    nav: {
      about: 'பேக்கேஜ் பற்றி',
      process: 'செயல்முறை',
      services: 'சேவைகள்',
      discount: '25% தள்ளுபடி',
      pricing: 'கட்டணம்',
      contact: 'தொடர்புக்கு',
      enquireNow: 'தொடங்குங்கள்',
    },
    hero: {
      diwaliSpecial: 'தீபாவளி சிறப்பு',
      subEyebrow: 'உங்கள் தொழிலுக்கான டிஜிட்டல் மார்க்கெட்டிங்',
      headlinePart1: 'தீபாவளி பிளாஸ்ட்',
      headlineHighlight: 'பேக்கேஜ்.',
      packageTitle: 'தீபாவளி பிளாஸ்ட் பேக்கேஜ்',
      intro:
        'இந்தத் தீபாவளியில், உங்கள் தொழிலை ஆன்லைனில் அதிகமான வாடிக்கையாளர்களிடம் கொண்டு செல்லத் தொடங்குங்கள்.',
      subIntro:
        'உங்கள் தொழிலின் இலக்குகளையும் தேவைகளையும் புரிந்துகொண்டு, சரியான வாடிக்கையாளர்களை அடைய ஏற்ற மார்க்கெட்டிங் திட்டத்தை உருவாக்குகிறோம்.',
      price: '₹10,749',
      pricePeriod: 'முதல் மாதத்திற்கு மட்டும்',
      priceSub: 'டிஜிட்டல் மார்க்கெட்டிங் பேக்கேஜ்',
      deadlineNotice: 'இந்த பேக்கேஜ் சலுகை நவம்பர் 30, 2026 அன்று முடிவடைகிறது.',
      deadlineExpired: 'இந்த சிறப்பு பேக்கேஜ் சலுகை முடிவடைந்தது.',
      noHiddenCharges: 'மறைமுகக் கட்டணம் இல்லை',
      noCommitment: 'நீண்டகால ஒப்பந்தம் இல்லை',
      webDiscountPill: 'இணையதள உருவாக்கச் சேவைக் கட்டணத்தில் 25% தள்ளுபடி.',
      getStartedBtn: 'இப்போதே தொடங்குங்கள்',
      downloadBrochureBtn: 'கையேட்டைப் பதிவிறக்குங்கள்',
      whatsappEnquiryBtn: 'வாட்ஸ்அப் விசாரணை',
      tagline: 'உங்கள் தொழில். எங்கள் உத்தி.',
      taglineHighlight: 'ஒன்றாக வளர்வோம்!',
    },
    countdown: {
      days: 'நாட்கள்',
      hours: 'மணி',
      minutes: 'நிமிடங்கள்',
      seconds: 'நொடிகள்',
      offerEndsOn: 'சலுகை நவம்பர் 30, 2026 அன்று முடிவடைகிறது (இரவு 11:59 IST)',
      expiredTitle: 'சிறப்பு சலுகைக் காலம் முடிவடைந்தது',
      expiredDesc:
        'தீபாவளி சிறப்பு சலுகை முடிவடைந்துவிட்டது. உங்கள் வணிகத்திற்கான டிஜிட்டல் மார்க்கெட்டிங் தேவைகளுக்கு எங்கள் குழுவை எப்போது வேண்டுமானாலும் தொடர்புகொள்ளலாம்.',
    },
    about: {
      eyebrow: '01 / நாங்கள் எப்படிச் செயல்படுகிறோம்',
      headingMain: 'ஒவ்வொரு தொழிலும் தனித்துவமானது.',
      headingHighlight: 'எங்கள் உத்தியும் அப்படித்தான்!',
      intro:
        'உங்கள் தொழிலின் இலக்குகளையும் தேவைகளையும் புரிந்துகொண்டு, சரியான வாடிக்கையாளர்களை அடைய ஏற்ற மார்க்கெட்டிங் திட்டத்தை உருவாக்குகிறோம்.',
      p1: 'சைரில் இன்போடெக்கில், முதலில் உங்கள் தொழிலைப் புரிந்துகொண்டு உங்களுக்குத் தேவையான டிஜிட்டல் மார்க்கெட்டிங் ஆதரவைக் கண்டறிகிறோம்.',
      p2: 'உங்கள் வணிகத் தேவைகளுக்கு ஏற்ப தனிப்பயனாக்கப்பட்ட மார்க்கெட்டிங் திட்டத்தை உருவாக்குகிறோம். ஒரே மாதிரியான திட்டம் இல்லாமல், உங்கள் தொழிலுக்குப் பொருத்தமான சேவைகளே வழங்கப்படும்.',
      goalEyebrow: 'எங்கள் இலக்கு எளிதானது',
      goalText:
        'உங்கள் தொழிலுக்கு வலுவான ஆன்லைன் இருப்பை உருவாக்கவும், சரியான வாடிக்கையாளர்களை சென்றடையவும் உதவுவது.',
      stat1Number: '100%',
      stat1Label: 'பொருத்தமான பணிகள்',
      stat2Number: '0',
      stat2Label: 'மறைமுகக் கட்டணம் இல்லை',
      stat3Number: '25%',
      stat3Label: 'இணையதளக் கட்டணத்தில் தள்ளுபடி',
    },
    process: {
      eyebrow: '01 / நாங்கள் எப்படிச் செயல்படுகிறோம்',
      headingMain: 'உங்கள் தொழிலுக்கு ஒரு',
      headingHighlight: 'தெளிவான திட்டம்.',
      intro:
        'உங்கள் தொழிலைப் புரிந்துகொண்டு, இலக்குகளுக்கு ஏற்ற டிஜிட்டல் மார்க்கெட்டிங் பணிகளைத் தேர்வு செய்கிறோம்.',
      steps: [
        {
          number: '01',
          title: 'உங்கள் தொழிலைப் புரிந்துகொள்கிறோம்',
          description:
            'உங்கள் தயாரிப்புகள், சேவைகள், வாடிக்கையாளர்கள் மற்றும் இலக்குகளைப் பற்றி அறிகிறோம்.',
        },
        {
          number: '02',
          title: 'ஆன்லைன் இருப்பை ஆய்வு செய்கிறோம்',
          description:
            'சமூக ஊடகப் பக்கங்கள், Google Business Profile மற்றும் இணையதளம் இருந்தால் அதையும் ஆய்வு செய்கிறோம்.',
        },
        {
          number: '03',
          title: 'எதை மேம்படுத்தலாம் எனக் கண்டறிகிறோம்',
          description:
            'உங்கள் தொழிலை ஆன்லைனில் மேலும் பலர் கண்டறிய என்ன செய்யலாம் என்பதைப் பார்க்கிறோம்.',
        },
        {
          number: '04',
          title: 'மார்க்கெட்டிங் திட்டத்தை உருவாக்குகிறோம்',
          description:
            'பொருத்தமான சேவைகள், செய்ய வேண்டிய பணிகள் மற்றும் காலக்கெடுவை உங்களுடன் உறுதி செய்கிறோம்.',
        },
        {
          number: '05',
          title: 'பணியைத் தொடங்குகிறோம்',
          description:
            'ஒப்புக்கொண்ட பணிகளைத் தொடங்கி, முன்னேற்றத்தையும் அடுத்த படிகளையும் உங்களுக்குத் தெரிவிக்கிறோம்.',
        },
      ],
      footerText: 'தெளிவான செயல்முறை. வலுவான ஆன்லைன் இருப்பு.',
    },
    services: {
      eyebrow: '02 / சேவைகளும் சலுகைகளும்',
      headingMain: 'உங்கள் தொழிலுக்கான',
      headingHighlight: 'சேவைகள்',
      intro:
        'பணியைத் தொடங்கும் முன், உங்கள் தொழிலுக்கு ஏற்ற சேவைகளையும் பணிகளையும் உங்களுடன் உறுதி செய்கிறோம்.',
      items: [
        {
          id: 'meta-ads',
          title: 'Meta விளம்பரங்கள்',
          description:
            'Facebook மற்றும் Instagram வழியாக வாடிக்கையாளர்களைச் சென்றடையலாம்.',
          category: 'விளம்பர வளர்ச்சி',
        },
        {
          id: 'google-ads',
          title: 'Google விளம்பரங்கள்',
          description:
            'உங்கள் தயாரிப்பு அல்லது சேவையைத் தேடுபவர்களைச் சென்றடையலாம்.',
          category: 'தேடுபொறி மார்க்கெட்டிங்',
        },
        {
          id: 'local-seo',
          title: 'Local SEO',
          description:
            'அருகிலுள்ள வாடிக்கையாளர்கள் உங்கள் தொழிலை ஆன்லைனில் கண்டறிய உதவும்.',
          category: 'ஆன்லைன் பார்வை',
        },
        {
          id: 'gbp',
          title: 'Google Business Profile',
          description:
            'Google Search மற்றும் Maps-ல் உங்கள் வணிகப் பதிவை மேம்படுத்தலாம்.',
          category: 'உள்ளூர் தேடல்',
        },
        {
          id: 'social-media',
          title: 'சமூக ஊடக மேம்பாடு',
          description:
            'உங்கள் பக்கங்களைப் புதுப்பித்து, தொழில்முறையாகப் பராமரிக்கலாம்.',
          category: 'பிராண்ட் மதிப்பு',
        },
        {
          id: 'creative',
          title: 'உள்ளடக்கம் மற்றும் வடிவமைப்பு',
          description:
            'சமூக ஊடகப் பதிவுகள் மற்றும் விளம்பரப் படைப்புகளை உருவாக்கலாம்.',
          category: 'படைப்பாற்றல்',
        },
      ],
      disclaimerStrong: 'கவனிக்க வேண்டியது:',
      disclaimerText:
        'பணியைத் தொடங்குவதற்கு முன் உங்களுடன் பேசி இறுதிச் சேவைகளையும் பணிகளையும் உறுதி செய்கிறோம்.',
    },
    discount: {
      eyebrow: 'கூடுதல் பலன்கள்',
      headingMain: 'அதிக மதிப்பு.',
      headingHighlight: 'கொண்டாட அதிக காரணங்கள்!',
      subheading:
        'உங்கள் தீபாவளி பிளாஸ்ட் பேக்கேஜ் மூலம் அதிக மதிப்பைப் பெறுங்கள். தெளிவான கட்டணம் மற்றும் நெகிழ்வான அணுகுமுறையுடன் நம்பிக்கையோடு தொடங்குங்கள்.',
      discountPercent: '25%',
      discountLabel: 'தள்ளுபடி',
      discountSublabel: 'இணையதள உருவாக்கச் சேவைக் கட்டணத்தில்',
      featureTag: 'உங்கள் வணிகத்திற்கான கூடுதல் சலுகை',
      cardHeading: 'இணையதள உருவாக்கத்தில் 25% தள்ளுபடி',
      cardDesc:
        'உங்கள் தொழிலுக்கு குறைந்த செலவில் ஒரு தொழில்முறை இணையதளத்தை உருவாக்குங்கள். உங்கள் தொழிலுக்கு இணையதளம் தேவைப்பட்டால் எங்கள் சேவைக் கட்டணத்தில் 25% தள்ளுபடி பெறுங்கள்.',
      cardHighlight: 'நவீன, வேகமான தொழில்முறை இணையதள சேவை.',
      benefitsTitle: 'கூடுதல் நன்மைகள்',
      benefitsHeading: 'அதிக பலன்கள். அதிக நம்பிக்கை.',
      benefit1Title: 'மறைமுகக் கட்டணம் இல்லை',
      benefit1Desc:
        'செலவுகளை முன்கூட்டியே தெரிவிப்போம். தொடக்கத்திலிருந்தே அனைத்தும் வெளிப்படையாக இருக்கும்.',
      benefit2Title: 'நீண்டகால ஒப்பந்தம் இல்லை',
      benefit2Desc:
        'முதல் மாதத்திற்குப் பின் நீங்கள் முடிவு செய்யலாம். எந்தவொரு நீண்டகாலக் கட்டாயமும் இல்லை.',
      confidenceHeading: 'நம்பிக்கையுடன் தொடங்குங்கள். சரியான ஆதரவுடன் வளருங்கள்!',
      confidenceSub:
        'வெளிப்படையான கட்டணம். நெகிழ்வான ஒப்பந்தம். உங்கள் தொழிலுக்கான சரியான டிஜிட்டல் ஆதரவு.',
    },
    transparency: {
      eyebrow: 'முக்கிய தகவல்கள்',
      headingMain: 'வெளிப்படையான தகவல்கள்.',
      headingHighlight: 'நம்பகமான அணுகுமுறை.',
      intro:
        'எங்கள் பணியில் முழு வெளிப்படைத்தன்மையை வழங்குகிறோம். நீங்கள் தெரிந்து கொள்ள வேண்டிய முக்கிய குறிப்புகள்:',
      termsTitle: 'முக்கிய விதிமுறைகளும் தகவல்களும்',
      term1:
        'Meta மற்றும் Google விளம்பரச் செலவுகள் தனி. அவை எங்கள் சேவைக் கட்டணத்தில் அடங்காது.',
      term2:
        'இணையதளப் பணிக்கான தனி விலை மதிப்பீட்டில் 25% தள்ளுபடி சேர்க்கப்படும்.',
      term3:
        'இறுதி சேவைகளும் பணிகளும் பணியைத் தொடங்கும் முன் உங்களுடன் பேசி உறுதி செய்யப்படும்.',
      guaranteeTitle: 'முதல் மாதத்திற்கு மட்டும்',
      guaranteeText:
        '₹10,749 முதல் மாதத்திற்கு மட்டுமே. அடுத்த மாதத்திற்கான தொடர்வை உங்கள் விருப்பப்படியே முடிவு செய்யலாம்.',
    },
    finalCta: {
      eyebrow: 'SYRIL INFOTECH',
      headingMain: 'உங்கள் வணிகத்தின் அடுத்த அத்தியாயம்',
      headingHighlight: 'இங்கே தொடங்குகிறது!',
      introLead: 'இந்தத் தீபாவளியை ஒரு புதிய தொடக்கமாக மாற்றுங்கள்!',
      introBody:
        'உங்கள் தொழில் ஆன்லைனில் மேலும் பிரகாசிக்க தகுதியானது. சைரில் இன்போடெக்குடன் இணைந்து வலுவான ஆன்லைன் இருப்பை உருவாக்குங்கள்.',
      offerBadge: 'உங்கள் வளர்ச்சிச் சலுகை',
      packageName: 'தீபாவளி பிளாஸ்ட்',
      price: '₹10,749',
      pricePeriod: 'முதல் மாதத்திற்கு மட்டும்',
      readyHeading: 'உங்கள் தொழிலை வளர்க்கத்',
      readyHighlight: 'தயாரா?',
      callNowBtn: 'இப்போதே அழையுங்கள்',
      emailBtn: 'மின்னஞ்சல் அனுப்புங்கள்',
      whatsappBtn: 'வாட்ஸ்அப் மூலம் தொடர்புகொள்ள',
      downloadBtn: 'கையேட்டைப் பதிவிறக்க (PDF)',
      directCallLabel: 'எங்கள் குழுவுடன் நேரடியாகப் பேச:',
      togetherText: 'ஒன்றாக வளர்வோம்!',
      brandTitle: 'SYRIL INFOTECH',
      websiteLabel: 'வலைத்தளத்தைப் பார்வையிட',
      emailLabel: 'மின்னஞ்சல்',
      phoneLabel: 'தொலைபேசி எண்',
      addressLabel: 'முகவரி',
      disclaimer:
        'Meta மற்றும் Google விளம்பரச் செலவுகள் தனி. இணையதளப் பணி தனி மதிப்பீட்டில் தள்ளுபடியுடன் வழங்கப்படும். உங்கள் தேவைக்கேற்ப சேவைகள் இறுதி செய்யப்படும்.',
      copyright: '© 2026 SYRIL INFOTECH · உங்கள் தொழில் ஆன்லைனில் பிரகாசிக்கட்டும்',
    },
  },
};
