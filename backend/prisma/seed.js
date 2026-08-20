import { PrismaClient } from './generated-client/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Ayurvedic Medicines database with new many-to-many structure...');

  // 1. Create/Update Admin Account
  await prisma.admin.deleteMany();
  const passwordHash = await bcrypt.hash('rkorganics', 10);
  await prisma.admin.create({
    data: {
      email: 'joelramireddy@gmail.com',
      passwordHash,
    },
  });
  console.log('Admin user created: joelramireddy@gmail.com / rkorganics');

  // 2. Create Default SiteSettings
  const existingSettings = await prisma.siteSettings.findFirst();
  if (existingSettings) {
    await prisma.siteSettings.deleteMany();
  }
  await prisma.siteSettings.create({
    data: {
      id: 1,
      businessName: 'R.K. Ayurveda & Organics',
      logoUrl: '',
      faviconUrl: '',
      heroTitle: 'Pure & Organic Ayurvedic Remedies',
      heroSubtitle: 'Experience the healing power of nature with 100% authentic, doctor-approved Ayurvedic formulations.',
      heroImageUrl: '',
      heroButtonText: 'View Medicines',
      heroButtonLink: '/medicines',
      heroVisible: true,
      aboutIntro: 'Dedicated to bringing authentic Ayurvedic health and wellness to your home.',
      footerText: '© 2026 R.K. Ayurveda. Crafted with love and nature. All rights reserved.',
    },
  });

  // 3. Create Default ContactDetails
  const existingContact = await prisma.contactDetails.findFirst();
  if (existingContact) {
    await prisma.contactDetails.deleteMany();
  }
  await prisma.contactDetails.create({
    data: {
      id: 1,
      businessName: 'R.K. Organics',
      address: 'Nandigama, Andhra Pradesh, India',
      phone: '+91 91217 56114',
      whatsapp: '9121756114',
      email: 'info@rkayurveda.com',
      googleMapsLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30560.106889705174!2d80.26442657788484!3d16.77660233486337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35efb9c5123d47%3A0x6b7dbb8a4f0bb4e!2sNandigama%2C%20Andhra%20Pradesh%20521185!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
      openingHours: '9:00 AM - 6:00 PM (Mon - Sat)',
      instagramUrl: 'https://instagram.com',
      facebookUrl: 'https://facebook.com',
      twitterUrl: 'https://twitter.com',
    },
  });

  // 4. Create Default AboutContent
  const existingAbout = await prisma.aboutContent.findFirst();
  if (existingAbout) {
    await prisma.aboutContent.deleteMany();
  }
  await prisma.aboutContent.create({
    data: {
      id: 1,
      heading: 'Our Ayurvedic Heritage & Philosophy',
      ourStory: 'Founded with a commitment to pure wellness, R.K. Ayurveda continues the legacy of traditional Ayurvedic healing. Our journey started in a small home kitchen, blending raw, handpicked herbs to create organic remedies that work in harmony with the body. Today, we remain dedicated to quality, sourcing from local farms, and preserving ancient formulations.',
      mission: 'To make pure, authentic, and organic Ayurvedic remedies accessible to everyone, promoting a lifestyle of balance, health, and holistic wellness.',
      vision: 'To be a globally trusted name in Ayurveda, recognized for our commitment to quality, authenticity, sustainability, and traditional heritage.',
      philosophy: 'Ayurveda is the science of life (Ayu = life, Veda = science). It teaches us that health is a dynamic balance between environment, body, mind, and spirit. We align with this philosophy by crafting products that restore your natural balance using raw, unprocessed botanical ingredients.',
      qualityInfo: 'Every batch is prepared with strict adherence to traditional methods. We run quality checks on our herbs to ensure they are free of metals, synthetic preservatives, and pesticides. Our medicines are small-batch crafted to maintain the highest potency and freshness.',
      whyChooseUs: '100% natural formula\nChemical-free processing\nHeritage-based recipes\nSmall-batch purity\nDoctor approved formulations',
      additionalContent: 'The Ayurvedic medicine information provided on this website is based on information supplied by medical practitioners. Please use these medicines only under the guidance and supervision of a certified practitioner. Do not self-medicate.',
      imageUrl: '',
      isEnabled: true,
    },
  });

  // 5. Create Default WhatsAppSettings
  const existingWhatsApp = await prisma.whatsAppSettings.findFirst();
  if (existingWhatsApp) {
    await prisma.whatsAppSettings.deleteMany();
  }
  await prisma.whatsAppSettings.create({
    data: {
      id: 1,
      whatsappNumber: '9121756114',
      defaultMessage: 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.',
      businessName: 'R.K. Ayurveda',
      orderMessageFormat: 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.',
    },
  });

  // 6. Clear Categories and Medicines
  await prisma.medicine.deleteMany();
  await prisma.category.deleteMany();

  // 7. Seed Categories
  const cat1 = await prisma.category.create({
    data: {
      name: 'Asthma / Dust Allergy',
      teluguName: 'ఆస్తమా డస్ట్ ఎలర్జీ',
      englishName: 'Asthma / Dust Allergy',
      teluguSubtitle: 'ఆస్తమా సైనస్',
      englishSubtitle: 'Asthma / Sinus',
      description: 'ఆస్తమా, సైనసైటిస్ మరియు డస్ట్ అలర్జీ నివారణకు ఉపయోగపడే మూలికా ఔషధాలు.',
      displayOrder: 1,
      isEnabled: true,
    },
  });

  const cat2 = await prisma.category.create({
    data: {
      name: 'For Reducing Urinary Heat',
      teluguName: 'మూత్రంలో వేడి తగ్గుటకు',
      englishName: 'For Reducing Urinary Heat',
      teluguSubtitle: 'మూత్ర సమస్యలు',
      englishSubtitle: 'Urinary Health',
      description: 'మూత్రంలో మంట, అతి వేడి మరియు మూత్ర నాళాల ఇన్ఫెక్షన్ల నివారణ ఔషధాలు.',
      displayOrder: 2,
      isEnabled: true,
    },
  });

  const cat3 = await prisma.category.create({
    data: {
      name: 'Gastric / Stomach Burning',
      teluguName: 'ఎస్ డి టి గ్యాస్టిక్ కడుపులో మంట',
      englishName: 'SDT Gastric / Stomach Burning',
      teluguSubtitle: 'గ్యాస్ సమస్యలు',
      englishSubtitle: 'Gastric & Acidity',
      description: 'గ్యాస్, ఎసిడిటీ, అజీర్తి మరియు కడుపులో మంట ఉపశమన ఔషధాలు.',
      displayOrder: 3,
      isEnabled: true,
    },
  });

  const cat4 = await prisma.category.create({
    data: {
      name: 'Psoriasis / Skin Disorders',
      teluguName: 'సోరియాసిస్ చర్మ వ్యాధులు',
      englishName: 'Psoriasis / Skin Disorders',
      teluguSubtitle: 'చర్మ రక్షణ',
      englishSubtitle: 'Skin Disorders',
      description: 'సోరియాసిస్, దురదలు, ఎగ్జిమా మరియు సమస్త చర్మ వ్యాధుల నివారణ ఔషధాలు.',
      displayOrder: 4,
      isEnabled: true,
    },
  });

  const cat5 = await prisma.category.create({
    data: {
      name: 'Sexual Health',
      teluguName: 'లైంగిక సమస్యలు',
      englishName: 'Sexual Health / Related Concerns',
      teluguSubtitle: 'లైంగిక సామర్థ్యం',
      englishSubtitle: 'Vigor & Vitality',
      description: 'శారీరక బలహీనత, నిస్సత్తువ నివారణకు సాంప్రదాయ ఆయుర్వేద లేహ్యాలు మరియు భస్మాలు.',
      displayOrder: 5,
      isEnabled: true,
    },
  });

  const cat6 = await prisma.category.create({
    data: {
      name: 'For Pain-Related Concerns',
      teluguName: 'నొప్పులకు',
      englishName: 'For Pain-Related Concerns',
      teluguSubtitle: 'వాత నొప్పులు',
      englishSubtitle: 'Joints & Muscle Pain',
      description: 'కీళ్ళ నొప్పులు, వాత నొప్పులు, వెన్నునొప్పి మరియు కండరాల నొప్పుల నివారణ గుగ్గులు మరియు మాత్రలు.',
      displayOrder: 6,
      isEnabled: true,
    },
  });

  console.log('Categories seeded.');

  // Helper dictionary to keep track of created medicines to support many-to-many associations
  // Keys will be lowercase English/Telugu identifier names to prevent duplicates
  const medicineRegistry = {};

  async function addMedicine(teluguName, englishName, defaultDescription, defaultPrice, defaultQuantity, categoryObjects) {
    const slugName = englishName ? englishName : teluguName;
    const baseSlug = slugName
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    // Generate unique slug in registry
    let slug = baseSlug;
    let counter = 1;
    while (medicineRegistry[slug]) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const price = defaultPrice || 250;
    const desc = defaultDescription || 'సాంప్రదాయ పద్ధతిలో తయారు చేయబడిన స్వచ్ఛమైన ఆయుర్వేద మూలిక.';

    const newMed = await prisma.medicine.create({
      data: {
        name: englishName || teluguName,
        teluguName,
        englishName,
        slug,
        description: desc,
        shortDescription: `${teluguName} ${englishName ? ' - ' + englishName : ''}`,
        price,
        imageUrl: '',
        quantity: defaultQuantity,
        availability: 'AVAILABLE',
        whatsappEnabled: true,
        displayOrder: 0,
        isFeatured: false,
        isActive: true,
        categories: {
          connect: categoryObjects.map(c => ({ id: c.id }))
        }
      }
    });

    medicineRegistry[slug] = newMed;
    return newMed;
  }

  // Define doctor provided formulations & ingredients
  
  // Category 1 items: 15 entries
  const c1Items = [
    { t: 'శుద్ధి చేసిన ఉలంద ఇంగిలీకము', e: 'Purified Cinnabar', q: null },
    { t: 'శుద్ధి చేసిన నాభి', e: 'Purified Aconite (Aconitum ferox)', q: null },
    { t: 'పచ్చ కర్పూరము', e: 'Edible Camphor', q: null },
    { t: 'పాలిస పత్రి', e: 'Talispatra (Abies webbiana)', q: null },
    { t: 'మిరియాలు', e: 'Black Pepper', q: null }, // M2M Cat 1 & Cat 3 (as yaluakalu/miriyalu etc) & Cat 4
    { t: 'సొంటి', e: 'Dry Ginger', q: null }, // M2M Cat 1 & Cat 4
    { t: 'పిప్పళ్ళు', e: 'Long Pepper', q: null }, // M2M Cat 1 & Cat 4
    { t: 'సీమత వాక్షరి', e: 'Bamboo Manna (Vanshlochan)', q: null }, // M2M Cat 1 & Cat 4 (as sitamavaksiri)
    { t: 'ఎలక్కాయలు', e: 'Cardamom', q: null },
    { t: 'దాల్చిన చెక్క', e: 'Cinnamon', q: null },
    { t: 'ఆకుపత్రి', e: 'Bay Leaf (Tejpatta)', q: null }, // M2M Cat 1 & Cat 3
    { t: 'నాగకేసరములు', e: 'Cobra Saffron (Mesua ferrea)', q: null },
    { t: 'చల్వ మిరియాలు', e: 'Cubeb Pepper (Kababchini)', q: null }, // M2M Cat 1 & Cat 2 (as chalava mariyamulu)
    { t: 'కురివేరు', e: 'Vetiver Root', q: null }, // M2M Cat 1 & Cat 4
    { t: 'కేసరి', e: 'Saffron', q: null } // M2M Cat 1 & Cat 5
  ];

  // Category 2 items: 27 entries
  const c2Items = [
    { t: 'అతి మధురము', e: 'Licorice Root (Mulethi)', q: null },
    { t: 'చలవ మరియములు', e: 'Cubeb Pepper (Kababchini)', q: null }, // mapped to Cubeb
    { t: 'సురాక్షారము', e: 'Potassium Nitrate (Kalmishora)', q: null },
    { t: 'తుమ్మ జిగురు', e: 'Acacia Gum (Babool)', q: null },
    { t: 'రూమిమ స్థకి', e: 'Mastic Gum (Rumi Mastagi)', q: null },
    { t: 'చందన', e: 'Sandalwood (Santalum album)', q: null },
    { t: 'కోపేబా', e: 'Copaiba Balsam', q: null },
    { t: 'నేరేడు చెక్క', e: 'Jamun Bark (Syzygium cumini)', q: null },
    { t: 'మామిడి చెక్క', e: 'Mango Bark (Mangifera indica)', q: null },
    { t: 'జువ్వి చెక్క', e: 'Ficus microcarpa Bark', q: null },
    { t: 'మర్రి చెక్క', e: 'Banyan Bark (Ficus benghalensis)', q: null },
    { t: 'ఆరేడు చెక్క', e: 'Bauhinia racemosa Bark', q: null },
    { t: 'మేడి చెక్క', e: 'Cluster Fig Bark (Ficus racemosa)', q: null },
    { t: 'రావి చెక్క', e: 'Peepal Bark (Ficus religiosa)', q: null },
    { t: 'జీడి చెక్క', e: 'Cashew Bark', q: null },
    { t: 'కొండపిండి వేర్లు', e: 'Mountain Knotgrass Root (Aerva lanata)', q: null }, // Duplicate 1
    { t: 'తెల్లచండ్ర చెక్క', e: 'White Cutch Bark (Acacia polyacantha)', q: null },
    { t: 'బథానిక', e: 'Bathanka', q: null },
    { t: 'పల్లేరు వేర్లు', e: 'Land Caltrops Root (Gokshura)', q: null },
    { t: 'అవిల చెక్క', e: 'Indian Elm Bark', q: null },
    { t: 'వట్టివేర్లు', e: 'Vetiver', q: null },
    { t: 'కొండపిండి వేర్లు', e: 'Mountain Knotgrass Root (Aerva lanata)', q: null }, // Duplicate 2 (Intentional duplicate)
    { t: 'దర్భ వేర్లు', e: 'Halfa Grass Root (Desmostachya bipinnata)', q: null },
    { t: 'కుశ వేర్లు', e: 'Kusha Grass Root', q: null },
    { t: 'కాశ వేర్లు', e: 'Kans Grass Root (Saccharum spontaneum)', q: null },
    { t: 'గుండ్ర యాను గడ్డి వేర్లు', e: 'Gundra Grass Root', q: null },
    { t: 'ఉత్కంఠ యాను గడ్డి వేర్లు', e: 'Utkantha Grass Root', q: null }
  ];

  // Category 3 items: 11 entries
  const c3Items = [
    { t: 'త్రికటు కములు ప్రత్యేక', e: 'Trikatu Churna Special', q: null },
    { t: 'త్రిఫలములు', e: 'Triphala Powder', q: null },
    { t: 'తుంగ ముస్తలు', e: 'Nut Grass (Cyperus rotundus)', q: null }, // M2M Cat 3 & Cat 4 (as tungamustalu)
    { t: 'బిడా లవణము', e: 'Bida Salt', q: null },
    { t: 'వాయు విడంగములు', e: 'False Black Pepper (Vidanga)', q: null }, // M2M Cat 3 & Cat 4
    { t: 'ఆకుపత్రి', e: 'Bay Leaf (Tejpatta)', q: null },
    { t: 'యాలుకలు', e: 'Cardamom', q: null },
    { t: 'లవంగములు', e: 'Cloves', q: null },
    { t: 'తెల్ల తెగడ', e: 'White Turpeth (Trivrit)', q: null },
    { t: 'పటిక బెల్లం', e: 'Rock Candy (Mishri)', q: null },
    { t: 'ఆవిపత్కర్ చూర్ణం', e: 'Avipattikar Churna', q: null }
  ];

  // Category 4 items: 51 entries
  const c4Items = [
    { t: 'అంజిస్టా', e: 'Indian Madder (Manjistha)', q: null },
    { t: 'తుంగముస్తలు', e: 'Nut Grass (Cyperus rotundus)', q: null },
    { t: 'కొడిసి పాల', e: 'Ivory Wood Bark (Kutaja)', q: null },
    { t: 'తిప్పతీగ', e: 'Heart-leaved Moonseed (Guduchi/Giloy)', q: null },
    { t: 'చంగల్వ కోస్తూ', e: 'Indian Costus Root', q: null },
    { t: 'సொంటి', e: 'Dry Ginger', q: null },
    { t: 'గంటు బారంగి', e: 'Rotheca serrata (Bharangi)', q: null },
    { t: 'వాకుడు', e: 'Yellow-Berried Nightshade (Kantakari)', q: null },
    { t: 'వస', e: 'Sweet Flag (Vacha)', q: null },
    { t: 'వేప పట్టు', e: 'Neem Bark', q: null },
    { t: 'పసుపు', e: 'Turmeric', q: null },
    { t: 'మాని పసుపు', e: 'Tree Turmeric (Daruharidra)', q: null },
    { t: 'కరక్కాయలు', e: 'Chebulic Myrobalan (Haritaki)', q: null },
    { t: 'తండ్రి కాయల వలుపు', e: 'Bibhitaki Fruit Pulp', q: null },
    { t: 'ఉసిరికాయల వలుపు', e: 'Amla Fruit Pulp', q: null },
    { t: 'చేడు పొట్ల', e: 'Bitter Snake Gourd (Patola)', q: null },
    { t: 'కటుక రోహిణి', e: 'Picrorhiza kurroa (Katuki)', q: null }, // M2M Cat 4 & Cat 6
    { t: 'మూర్వ', e: 'Bowstring Hemp (Murva)', q: null },
    { t: 'వాయువిడంగము', e: 'False Black Pepper (Vidanga)', q: null },
    { t: 'వేగిస', e: 'Indian Kino Tree (Bijasal)', q: null },
    { t: 'చిత్ర మూలం', e: 'Leadwort Root (Chitrak)', q: null },
    { t: 'పిల్లి పిచర', e: 'Asparagus racemosus (Shatavari)', q: null },
    { t: 'బ్రాహ్మి', e: 'Brahmi (Bacopa monnieri)', q: null },
    { t: 'పిప్పళ్ళు', e: 'Long Pepper', q: null },
    { t: 'కొడిస పాల విత్తనాలు', e: 'Kutaja Seeds (Indrayava)', q: null },
    { t: 'అడ్డ రసము వేరు', e: 'Malabar Nut Root (Vasa)', q: null },
    { t: 'గుంటగలగర ఆకు', e: 'False Daisy (Bhringraj)', q: null },
    { t: 'దేవదారు', e: 'Deodar Cedar', q: null },
    { t: 'చిరు బో', e: 'Chirata (Swertia chirayita)', q: null },
    { t: 'చండ్రి', e: 'Cutch Tree (Khadira)', q: null },
    { t: 'మంచి గంధం', e: 'Sandalwood', q: null },
    { t: 'తెగడ', e: 'Turpeth (Trivrit)', q: null },
    { t: 'వరుణ మూలం', e: 'Three-leaved Caper Root (Varuna)', q: null },
    { t: 'నేల వేము', e: 'Creat (Kalmegh)', q: null },
    { t: 'భావం చాలు', e: 'Babchi Seeds (Bakuchi)', q: null },
    { t: 'రేల పట్ట', e: 'Golden Shower Tree Bark (Aragvadha)', q: null },
    { t: 'ములుగపట్ట', e: 'Moringa Bark', q: null },
    { t: 'అడవి వేప పట్ట', e: 'Wild Neem Bark', q: null },
    { t: 'గానుగ చెట్టు', e: 'Pongamia Tree', q: null },
    { t: 'అతి విష', e: 'Atis (Aconitum heterophyllum)', q: null },
    { t: 'కురువేరు', e: 'Vetiver Root', q: null },
    { t: 'చేదు పుచ్చ', e: 'Bitter Apple (Indravaruni)', q: null },
    { t: 'సుగంధి పాల తెలుపు', e: 'White Sariva (Hemidesmus)', q: null },
    { t: 'సుగంధి పాల నలుపు', e: 'Black Sariva', q: null },
    { t: 'పర్పాటకము', e: 'Fumitory (Pittapapada)', q: null },
    { t: 'జటమాంసి', e: 'Spikenard', q: null },
    { t: 'చంగల్వకోష్టం', e: 'Indian Costus Root', q: null },
    { t: 'గంటు భరంగి', e: 'Rotheca serrata (Bharangi)', q: null },
    { t: 'చవ్వం', e: 'Java Long Pepper (Chavya)', q: null },
    { t: 'సీతమ వాక్షిరి', e: 'Bamboo Silica (Vanshlochan)', q: null },
    { t: 'జాజికాయ', e: 'Nutmeg', q: null }
  ];

  // Category 5 items: 8 entries
  const c5Items = [
    { t: 'అశ్వగంధ చూర్ణం', e: 'Ashwagandha Powder', q: null },
    { t: 'కేసరి', e: 'Saffron', q: null },
    { t: 'సపెద్ ముస్లి', e: 'Safed Musli', q: null },
    { t: 'శిలజిత్', e: 'Purified Shilajit', q: null },
    { t: 'స్వర్ణ భస్మం', e: 'Gold Calx (Swarna Bhasma)', q: null },
    { t: 'శుద్ధ గంధకము', e: 'Purified Sulphur (Shuddha Gandhak)', q: null }, // M2M Cat 5 & Cat 6
    { t: 'కామ చూడ చింతామణి రస', e: 'Kamachudamani Rasa', q: null },
    { t: 'సిద్ధం మకరద్వాజ్', e: 'Sidh Makardhwaj', q: null }
  ];

  // Category 6 items: 15 entries
  const c6Items = [
    { t: 'వాత చింతామణి రస బ్రహుత్', e: 'Brihat Vata Chintamani Ras', q: '10 tablets' },
    { t: 'మహా యోగరాజు గూగుల్ స్వర్ణయుక్త', e: 'Maha Yograj Guggulu Swarnayukta', q: '10 tablets' },
    { t: 'రాసనాది గుగ్గులు', e: 'Rasnadi Guggulu', q: null },
    { t: 'సముద్ర పెనము', e: 'Cuttlefish Bone (Samudra Phena)', q: null },
    { t: 'లోహ భస్మం', e: 'Iron Calx (Lauha Bhasma)', q: null },
    { t: 'వాంగ్ భస్మం', e: 'Tin Calx (Vanga Bhasma)', q: null },
    { t: 'శుద్ధిచేసిన మహే సాక్షి', e: 'Purified Guggulu (Mahishaksha)', q: null },
    { t: 'గజ పిప్పళ్లు', e: 'Java Long Pepper (Gaja Pippali)', q: null },
    { t: 'అబ్రక భస్మం', e: 'Mica Calx (Abhraka Bhasma)', q: null },
    { t: 'కటిక రోహిణి', e: 'Picrorhiza kurroa (Katuki)', q: null },
    { t: 'తానికాయ', e: 'Bibhitaki Fruit (Tani)', q: null },
    { t: 'పిప్పళ్లు చూర్ణం', e: 'Long Pepper Powder', q: null },
    { t: 'శుద్ధ గంధకము', e: 'Purified Sulphur (Shuddha Gandhak)', q: null },
    { t: 'తామర భస్మం', e: 'Copper Calx (Tamra Bhasma)', q: null },
    { t: 'శంఖ భస్మం', e: 'Conch Shell Calx (Shankha Bhasma)', q: null }
  ];

  // Map to build final seeding list
  // We want to link items properly.
  // For duplicates like "కొండపిండి వేర్లు", we will bypass the normal map matching and create separate entries
  const allSeededMeds = [];

  // Group all items and build unique items or associate them.
  const rawList = [
    { items: c1Items, cat: cat1 },
    { items: c2Items, cat: cat2 },
    { items: c3Items, cat: cat3 },
    { items: c4Items, cat: cat4 },
    { items: c5Items, cat: cat5 },
    { items: c6Items, cat: cat6 }
  ];

  const uniqueRegistry = {};

  for (const group of rawList) {
    const category = group.cat;
    for (const item of group.items) {
      // Check if duplicate kondapindi
      const isDuplicateKondapindi = item.t === 'కొండపిండి వేర్లు';
      
      // We will check if it already exists in uniqueRegistry, except for kondapindi duplicates
      if (uniqueRegistry[item.t] && !isDuplicateKondapindi) {
        // Just append the category connection!
        uniqueRegistry[item.t].cats.push(category);
      } else {
        const itemRecord = {
          t: item.t,
          e: item.e,
          q: item.q,
          cats: [category]
        };
        allSeededMeds.push(itemRecord);
        if (!isDuplicateKondapindi) {
          uniqueRegistry[item.t] = itemRecord;
        }
      }
    }
  }

  console.log(`Prepared ${allSeededMeds.length} medicines/ingredients for DB write.`);

  // Write all items
  for (const item of allSeededMeds) {
    await addMedicine(item.t, item.e, null, 299, item.q, item.cats);
  }

  console.log('Seeded all Ayurvedic Medicines successfully.');

  // 8. Seed Benefits (Why Choose Us)
  await prisma.benefit.deleteMany();
  await prisma.benefit.createMany({
    data: [
      {
        title: '100% Pure Herbs',
        description: 'We pick and prepare all botanical ingredients in accordance with old scripts.',
        displayOrder: 1,
        isActive: true,
      },
      {
        title: 'Quality Standards',
        description: 'Strict adherence to standard traditional formulation without preservatives.',
        displayOrder: 2,
        isActive: true,
      },
      {
        title: 'Direct WhatsApp Order',
        description: 'Ordering is as simple as sending a chat. Tap, customize, and secure your order.',
        displayOrder: 3,
        isActive: true,
      },
    ]
  });

  // 9. Seed Navigation Items
  await prisma.navigationItem.deleteMany();
  await prisma.navigationItem.createMany({
    data: [
      { name: 'Home', url: '/', displayOrder: 1, isActive: true },
      { name: 'About Us', url: '/about', displayOrder: 2, isActive: true },
      { name: 'Medicines', url: '/medicines', displayOrder: 3, isActive: true },
    ]
  });

  // 10. Seed Testimonials
  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Aarav Mehta',
        content: 'The Ashwagandha tablets have completely changed my daily routine. My stress levels are down and my focus is noticeably sharper. Highly recommend R.K. Ayurveda!',
        rating: 5,
        imageUrl: '',
        displayOrder: 1,
        isActive: true,
      },
      {
        name: 'Priyanka Sen',
        content: 'I have been using the Bhringraj hair oil for three weeks and my hair feels much thicker and healthier. The cooling sensation is very relaxing.',
        rating: 5,
        imageUrl: '',
        displayOrder: 2,
        isActive: true,
      }
    ]
  });

  // 11. Seed Promotions
  await prisma.promotion.deleteMany();
  await prisma.promotion.createMany({
    data: [
      {
        title: 'Monsoon Immunity Special',
        description: 'Get up to 20% off on all digestive and immunity-boosting remedies this season! Chat to order now.',
        buttonText: 'Order Now',
        buttonUrl: '/medicines',
        isActive: true,
      }
    ]
  });

  console.log('Seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
