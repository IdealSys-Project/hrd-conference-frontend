'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import './speakers.css';
import SpeakerModal from './speaker-modal';

const Speakers: React.FC = () => {
  const speakers = [
    {
      id: 1,
      name: 'Ng Eng Hooi',
      position: 'Chair',
      company: 'Coaching Culture International',
      image: '/assets/images/speakers/speaker-images/Coaching_Culture_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Coaching_culture_logo.png',
      linkedIn: 'https://www.linkedin.com/in/ng-eng-hooi-pcc-icf/',
      bio: 'Eng Hooi is an accomplished author, learning and development practitioner, and executive coach with over 15 years of corporate and consulting experience. As a former head of organization development and Global Master Coach at a leading technology firm in Asia, he spearheaded talent development strategies and fostered a coaching culture for sustainable growth. Eng Hooi co-led global coaching task forces, designing and implementing coaching initiatives and certification programs for leaders worldwide. Locally, he has held various HR roles, including learning and development, talent management, and HR innovation. He authored Building a Sustainable Coaching Culture: A Step-by-Step Guide to Coaching Culture Implementation',
    },
    {
      id: 2,
      name: 'Yanuar Kurniawan',
      position: 'People Development & Learning Director',
      company: "L'Oréal Indonesia",
      image: '/assets/images/speakers/speaker-images/LOREAL_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Loreal_logo.png',
      linkedIn: 'https://www.linkedin.com/in/yanuar-kurniawan/',
      bio: "Yanuar Kurniawan is a seasoned leader in Human Resources, currently serving as People Development and Learning Director at L'Oréal Indonesia. He brings extensive experience from diverse roles across Southeast Asia, having served as Senior Vice President for Talent and Leadership development for Lazada Group and for Organization, Talent Development, and Organization Culture at Lazada Indonesia.\n\nBefore joining Lazada, Yanuar honed his expertise in organizational effectiveness and leadership development as an Associate Principal at Korn Ferry Indonesia and managed assessment centers and leadership training programs at Mitsubishi Fuso - Daimler AG in Tokyo. His strong analytical background, complemented by an MBA and experience as a P&G Finance Manager, enables him to effectively evaluate and understand the financial and business impact of HR initiatives.\n\nYanuar is a recognized thought leader, named a LinkedIn Top Voice in 2024, and a sought-after speaker at international conferences, sharing his insights on HR Transformation, Organization Development, Culture, and Learning & Development. He is passionate about fostering impactful HR initiatives, improving employee engagement, driving organizational culture change, and developing talent to reach its full potential.",
    },
    {
      id: 3,
      name: 'Mallory Loone',
      position: 'Co-founder & Lead Trainer',
      company: 'Work Inspires',
      image: '/assets/images/speakers/speaker-images/Works_Inspire_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Workinspires_logo.png',
      linkedIn: 'https://www.linkedin.com/in/mallory-loone/',
      bio: "Mallory Loone is the co-founder of Work Inspires, a people engagement and development company, who has worked with many Fortune 500 companies, both locally and abroad, customising for different levels of employees. Mallory also speaks for platforms like BFM 89.9, The Economist Impact, HRM Asia, HR Tech Festival and many more.\n\nHer experiences in the people development scene have earned her the recognition of Malaysia's Most Talented Coach, 2019 by the World HRD Congress, Top 100 LinkedIn Icons to Follow in Malaysia by Marketing in Asia, 2020 and was a 4-time TEDx Speaker. Work Inspires has also been awarded the Employee Engagement Consultancy by HR Vendor Award 2022, 2023 and 2024, Best Management Trainee Consultant 2023, Best Instructional Design 2024 and Local Hero award for the HR Vendor of the Year Awards 2023.\n\nWork Inspires has also won the SME100 award in 2023. She continues to contribute to society by mentoring startups and youths. Mallory is also on the ASEAN Human Development Organisation Malaysia board and a Talent Fellow (TF50)underTalentCorp.",
    },
    {
      id: 4,
      name: 'Dr Najwa Hanim Md Rosli',
      position: 'Consultant Neuropsychiatrist',
      company: 'Avisena Specialist Hospital',
      image: '/assets/images/speakers/speaker-images/Avisena_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Avisena_logo.png',
      linkedIn:
        'https://www.linkedin.com/in/dr-najwa-rosli-neuropsychiatrist-and-mental-health-speaker-0645a25/',
      bio: 'Dr. Najwa Rosli is a Consultant Neuropsychiatrist at Avisena Specialist Hospital in Shah Alam. She has over a decade of experience teaching psychiatry at IIUM and previously served as an Associate Professor at UiTM (2021) and MSU (2022).\n\nPassionate about mental health education and advocacy, she speaks at conferences, training sessions, and community events, sharing strategies for resilience, emotional well-being, and mental wellness. She is trained in various psychotherapeutic approaches, including CBT, ACT, DBT, and Psychodynamic Psychotherapy.\n\nBelieving that mental health should be a conversation, not a stigma, she actively engages through public speaking and social media (@ShrinkingWithNajwa) to make support more accessible. Her goal: to help others navigate life with understanding, resilience, and self-compassion.',
    },
    {
      id: 5,
      name: 'Dr. Murugappan',
      position: 'Chief Human Resource Officer',
      company: 'Malaysian Communications Multimedia Commission (MCMC)',
      image: '/assets/images/speakers/speaker-images/MCMC_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/MCMC_Logo.png',
      linkedIn: 'https://www.linkedin.com/in/dr-murugappan-hr-strategist/?originalSubdomain=my',
      bio: 'Dr. Murugappan is an advocate of value translation and worked with multinational corporations (MNCs) from diverse sectors as well as the public sector with a career span of 30 years to date.\n\nBecame a researcher, thinker, teacher, and guide by choice. Continuously polishing the leadership traits in him. A lifelong learner, having specific interest in digital leadership, evidence-based management (EBM), people analytics, total rewards strategy, human capital financial statement, project management and process improvement.\n\nHe focuses on organizational leadership and strategic people practices adding value to both customers and investors. This is facilitated by developing leaders, creating better solutions, and co-creating people centered holistic, and end user initiatives. Leading self and organization to awards and accolades locally and globally for good people management practices. Authored and published a book and articles in academic and industry journals. He is appointed to few Industries Advisory Panel in local public and private universities.',
    },
    {
      id: 6,
      name: 'Tasha Ho',
      position: 'Head, Talent Management',
      company: 'Sunway Group',
      image: '/assets/images/speakers/speaker-images/Sunway_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Sunway_logo.png',
      linkedIn: 'https://www.linkedin.com/in/tasha-ho-b6792335/?originalSubdomain=my',
      bio: 'With 13 years of extensive experience in the HR field, Tasha has successfully overseen a wide range of HR functions, including business partnering, performance management, talent management, employer branding, employee experience, and learning & development. She has honed her expertise across diverse industries, from conglomerates and multinational companies to the fashion sector.\n\nAs a certified practitioner in various psychometric tools such as Hogan Assessments, DISC, PPA, and Harrison Assessment, she leverages data-driven insights to drive strategic people initiatives. Being a change agent and Organizational Development (OD) specialist, Tasha is passionate about building future-ready talent pipelines that support the long-term growth strategies of the businesses.\n\nShe enjoys working with diverse groups of people from different background and expertise.',
    },
    {
      id: 7,
      name: 'Farha Burhan',
      position: 'Talent Development Specialist, PETRONAS Leadership Centre',
      company: 'PETRONAS',
      image: '/assets/images/speakers/speaker-images/PETRONAS_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Petronas_logo.png',
      linkedIn: 'https://www.linkedin.com/in/farha-burhan-233952bb/?originalSubdomain=my',
      bio: 'Farha brings over 20 years of experience in Human Resources and Learning & Development. She specializes in program design, learning experience, and coaching, with extensive exposure in facilitating leadership development across PETRONAS. Farha is also a certified Solution-Focused Coach and has trained in advanced facilitation, design thinking, and instructional design.',
    },
    {
      id: 8,
      name: 'Amardeep Singh Toor',
      position: 'Partner',
      company: 'Lee Hishammuddin Allen & Gledhill',
      image: '/assets/images/speakers/speaker-images/LHAG_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/LHAG_Logo.png',
      linkedIn: 'https://www.linkedin.com/in/amardeepsinghtoor/?originalSubdomain=my',
      bio: 'Amardeep is recognised as a "Next Generation Partner" by The Legal 500 Asia-Pacific 2025, ranked "Band 4" by Chambers Asia-Pacific 2025, a "Rising Star" by asialaw 2024, and a "Future Star" by Benchmark Litigation Asia-Pacific 2024, in the field of Labour and Employment. Amardeep is often commended for his outstanding communication skills, quality of work, timeliness, and pragmatic approach.\n\nAmardeep was also recommended by The Legal 500 for immigration law and the management of foreign workers. He recently won "Young Lawyer of the Year" in the Asian Legal Business Awards – Malaysia 2024 and received an Honourable Mention in the "Malaysia Lawyer of the Year" category in the asialaw\'s Client Choice Awards 2024.\n\nHe was also recognised as a "Rising Star" in the Asian Legal Business – Malaysia 2022, an annual listing of lawyers under the age of 40 who are delivering high-quality work, earning accolades from their colleagues, superiors, and clients. He also contributed to Malaysian Chapter of the Chambers Employment 2023 Global Practice Guide. He has contributed several articles to the Industrial Law Reports published by The Malaysian Current Law Journal and is a regular speaker at the national Industrial Relations Law Conference and Malaysian Employment Law Conference. Amardeep is a member of the Bar Council\'s Industrial & Employment Law Committee and chairs the Practitioner Issues sub-committee.',
    },
    {
      id: 9,
      name: 'Rachel Biancotti',
      position: 'Global Talent Acquisition',
      company: 'Nestlé',
      image: '/assets/images/speakers/speaker-images/Nestle_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Nestle_logo.png',
      linkedIn: 'https://my.linkedin.com/in/rachel-biancotti',
      bio: "Rachel is a seasoned professional with over 20 years of experience in talent acquisition. Throughout their career, Rachel has navigated various recruitment models and led teams recruiting for different functions, positions, and countries.\n\nShe has witnessed the evolution of talent acquisition processes from predominantly paper-based methods to the current digital era where AI is increasingly being adopted. One of Rachel's key strengths is her empathy, which ensures that while leveraging AI and other technological tools, the human touch remains at the forefront, creating a personalized and engaging experience for candidates.",
    },
    {
      id: 10,
      name: 'Herman Cahyadi',
      position: 'Head of People',
      company: 'Gojek Indonesia',
      image: '/assets/images/speakers/speaker-images/GOTO_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/GOTO_logo.svg.png',
      linkedIn: 'https://www.linkedin.com/in/herman-cahyadi-70138317/',
      bio: 'Herman Cahyadi is an accomplished HR transformational leader with over 20 years of experience driving organizational success through strategic HR initiatives. He has held pivotal roles, including Head of People at Gojek Indonesia and Head of HR Operations at PT GOTO Gojek Tokopedia, Tbk.\n\nA Doctorate in Management Science complements his expertise in areas such as HR strategy, organizational development, talent management, and shared services. With a robust track record in industries like banking, manufacturing, and technology, Herman excels in workforce optimization, mergers, and organizational transformation.\n\nHe is also a dedicated academic, lecturing in Strategic and Human Resources Management at Tarumanagara University.',
    },
    {
      id: 11,
      name: 'Najmie Nordin',
      position: 'Chief Talent Officer',
      company: 'Johor Corporation',
      image: '/assets/images/speakers/speaker-images/JCorporation_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/JCorporation_logo.png',
      linkedIn: 'https://www.linkedin.com/in/najmienoordin/',
      bio: 'Najmie holds a Manchester Global MBA from the University of Manchester, alongside a Bachelor of Law (Hons) from Universiti Teknologi MARA, reflecting a formidable academic foundation. His skill set spans various domains, encompassing adeptness in people management, strategic sales planning, dynamic branding, and innovative marketing strategies.\n\nBefore embarking on his journey with JCorp, Najmie played pivotal roles at Cosmopoint Sdn Bhd, including Chief Executive Officer (Group) and Chief Operating Officer (Group). His track record underscores a commitment to driving organisational excellence and fostering sustainable growth, marking him as a formidable force in the corporate landscape.',
    },
    {
      id: 12,
      name: 'Mohamed Parrish Ersalle',
      position: 'Chief Human Resources Officer',
      company: 'Global Turbine Asia',
      image: '/assets/images/speakers/speaker-images/Global_Turbine_Asia_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Global_Turbine_Asia_logo.png',
      linkedIn: 'https://www.linkedin.com/in/mohamed-parrish-ersalle-b5a47b46/',
      bio: "Mohamed Parrish Ersalle boasts over 30 years of Human Resources experience across manufacturing, financial services, property management, aviation, and consulting industries. He began his career at Nestle Foods (M) Sdn. Bhd. as a Management Trainee, gaining early exposure to Collective Agreement negotiations. He later held the position of Head of Human Resources Relations before moving to BASF (M) Sdn. Bhd. as a Training Manager focusing on recruitment and development.\n\nIn financial services, Mohamed served as Group Head of HR at Allianz Malaysia Berhad, earning the HR Director of 2010 award at the South East Asia HR Excellence Awards. At Prudential BSN Takaful, he was the Chief Human Resources Officer, driving HR strategies. Further career highlights include leading HR initiatives at Sapura Resources Berhad, Agrobank (serving over 3,450 employees), and later working as a freelance HR consultant. In 2023, he featured as a speaker at AKPK's The Insights, discussing financial stress and mental well-being.\nCurrently, Mohamed is the Chief Human Resources Officer of Global Turbine Asia (GTA), overseeing HR strategies for a major MRO service provider in Asia Pacific's military and civil aviation sectors. He is renowned for his leadership in HR transformation and strategic planning.",
    },
    {
      id: 13,
      name: 'Edalyn "Lyn" D. Hadjula-Legarde',
      position: 'People & Culture Director',
      company: 'Friesland Campina',
      image: '/assets/images/speakers/speaker-images/Friesland_Campina_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Friesland_Compina_logo.png',
      linkedIn: 'https://www.linkedin.com/in/lyn-hadjula-legarde-chrme-csphr-94029aa/',
      bio: 'Lyn is an accomplished HR leader with over 25 years of experience in People and Culture Strategy and Management across multinational and local organizations. She is passionate about Inclusion and Diversity, Talent and Leadership Development, and Strategic Rewards. Lyn has worked with renowned brands such as AMA Group of Companies, Emerson Electric Asia Ltd, Red Ribbon Bakeshop Inc. (part of the Jollibee group), Philip Morris Asia Ltd, and Alaska Milk Corporation. Currently, she serves as the Country People and Culture Director for Dutch Lady Milk Industries – Malaysia Berhad, under Royal FrieslandCampina (RFC).\nLyn has successfully led organizational transformation interventions, driving innovative HR solutions to foster growth and build strong organizational cultures. Under her leadership, Alaska was certified as a Great Place to Work and achieved recognition for its Talent Management and Leadership Programs. At Dutch Lady, she continues to drive cultural transformation as RFC adopts a new business model, with the company earning Top Employer recognition in Malaysia for two consecutive years.\nAn active contributor to the HR community, Lyn has judged HR awards in the Philippines and Malaysia, and spoken at forums on topics like Artificial Intelligence in HR and Inclusion and Diversity. She holds multiple prestigious HR certifications and a strong academic background, complementing her advocacy and leadership.',
    },
    {
      id: 14,
      name: 'Eveliene Witjes',
      position: 'Global Head of Human Resources',
      company: 'TiNDLE Foods',
      image: '/assets/images/speakers/speaker-images/Tindle_Food_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Tindle_logo.png',
      linkedIn: 'https://sg.linkedin.com/in/eveliene-witjes-83355018',
      bio: "Eveliene Witjes is an entrepreneur and Human Resources Management Specialist with over 20 years of professional experience; of which 16 years in core Human Resource Management roles. She has a proven ability in developing an HR department from ground up and in continuous managing the HR operations of start-up/medium and larger sized companies. She holds a strong command in core HR functions such as Recruitment, Learning & Development, Performance Management, Employee Retention, Payroll, Onboarding and Succession Planning, Policies & Procedures, International Mobility, Health & Safety, Regulatory & Affairs, Legal mediation, Strategic planning and budgeting, Taxation and has helped many different types of organizations with their transformation from scaling to restructuring and M&A's.",
    },
    {
      id: 15,
      name: 'Syahrul Azmi',
      position: 'Country Lead for Learning & Leadership Development for Accenture Malaysia',
      company: 'Accenture',
      image: '/assets/images/speakers/speaker-images/Accenture_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Accenture_logo.png',
      linkedIn: 'https://www.linkedin.com/in/syahrulazmi/?originalSubdomain=my',
      bio: 'Syahrul is a learning, performance and change practitioner with 15+ years of experience in MNCs, Public Listed companies, SMEs, and Start-ups. He is passionate about leadership development, communications and innovation and has worked as an external and internal resource to design, develop and deliver learning strategy, programmes and experiences that impact the bottom line. He enjoys helping leaders transition in their roles from leading people, to leading teams and leading organizations. He’s had experience working with leaders across 5 continents and 10 countries. Today, he is the Country Lead for Learning and Leadership Development for Accenture Malaysia strategizing and facilitating talent development across Strategy, Consulting, Technology, Operations and Song. He is focused on building a pipeline of leaders from the ground up, leveraging immersive technology to accelerate and create great learning experiences, wherever learning happens.',
    },
    {
      id: 16,
      name: 'Mohammad Iesa Morshidi',
      position: 'Director, Workforce Management PWC Malaysia',
      company: 'PWC Malaysia',
      image: '/assets/images/speakers/speaker-images/PWC_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/PWC_logo.png',
      linkedIn: 'https://www.linkedin.com/in/mohdiesa/?originalSubdomain=my',
      bio: 'Mohammad Iesa Morshidi is a Director in PwC’s Workforce Management practice. Iesa has more than 29 years of corporate and consulting experience in the public and private sectors, working with governments, multinational corporations, government linked companies and private entities. His clients span various industries such as energy, utilities and infrastructure, diversified conglomerates, financial services, and telecommunications. Prior to joining PwC Malaysia, Iesa held various roles in multinational and Malaysian corporate and consulting organisations.',
    },
    {
      id: 17,
      name: 'Aiza Azreen',
      position: 'Co-founder, Evolve Precision Healthcare',
      company: 'Evolve Precision Healthcare',
      image: '/assets/images/speakers/speaker-images/Evolve_Precision_Healthcare_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Evolve_Precision_Healthcare_logo.png',
      linkedIn: 'https://www.linkedin.com/in/aizaazreen/',
      bio: 'Aiza Azreen is a strategic C-Suite executive with 25+ years leading digital transformation across healthcare, fintech, and public sectors. She co-founded Evolve Precision Healthcare and advises UK-based ELIAS Health, an AI platform optimizing clinical workflows. As CEO of MySejahtera, she scaled the platform to 50M+ users. Aiza also pioneered Malaysia’s fintech landscape by launching Boost eWallet. A champion of human intelligence, she advocates for responsible AI that empowers people, not replaces them—driving inclusive innovation where human insight remains at the core.',
    },
    {
      id: 18,
      name: 'Nic Chambers',
      position: 'Managing Director',
      company: 'Michael Page',
      image: '/assets/images/speakers/speaker-images/Michael_Page_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Michael_Page_logo_1.png',
      linkedIn: 'https://www.linkedin.com/in/nic-chambers-bbb74a7/?originalSubdomain=my',
      bio: 'Nic Chambers is the Managing Director of PageGroup Malaysia. He is an experienced recruitment leader with 20 years recruitment experience across the UK, Australia and most recently Malaysia. He started his career in the UK before joining Michael Page Perth in 2006. In 2016 Nic moved to Malaysia where he now leads PageGroup Malaysia, overseeing a team of 100 consultants. He is also a board member of British Malaysia Chamber of Commerce and chairs BMCCs Talent Network.',
    },
    {
      id: 19,
      name: 'Sara Ali Mostafa',
      position: 'Learning & Development Manager',
      company: 'Futuresparx',
      image: '/assets/images/speakers/speaker-images/Futuresparx_female_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Futuresparx_logo.png',
      linkedIn: 'https://www.linkedin.com/in/sara-ali-942a0595/?originalSubdomain=my',
      bio: 'Sara Ali Mostafa is a seasoned L&D leader with 17+ years of global experience designing transformative learning programs that drive business results. As Futuresparx’s Learning & Development Manager, she leads strategic capability initiatives across sectors. Sara specializes in GenAI integration, instructional design, coaching, and analytics-driven solutions, delivering flagship programs to top organizations. Her certifications span learner experience, agile frameworks, and AI applications. Sara’s work across Asia, Europe, and the Middle East has empowered thousands to lead change and enhance performance.',
    },
    {
      id: 20,
      name: 'Hilson Yeap',
      position: 'Founder & CEO EduAction.',
      company: 'EduAction',
      image: '/assets/images/speakers/speaker-images/Eduaction_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Eduaction_logo.png',
      linkedIn: 'https://www.linkedin.com/in/hilsonyeap/?originalSubdomain=my',
      bio: 'Hilson Yeap is the founder and CEO of EduAction. He has 15 years of experience in the learning and development (L&D) industry, specializes in the area of team building, business development & gamification. He is the author of the best sought after training & development e-book, “7 reasons why training is not effective and what you can do about it”. He has been practicing & research on human capital development for the past 15 years and current Secretary of Experiential Learning Institute (ELI), Nevada USA. He has a degree in Food Marketing from University Putra Malaysia, a lifetime certification. member of Frontier Trainings USA, the world’s #1 business experiential learning provider & a certified trainer from PSMB TTT.',
    },
    {
      id: 21,
      name: 'Zain Azrai bin Dato’ Dr. Zaaba',
      position: 'Vice President for Rewards & People Management, Human Capital',
      company: 'Lembaga Tabung Angkatan Tentera (LTAT)',
      image: '/assets/images/speakers/speaker-images/LTAT_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/LTAT_logo.png',
      linkedIn: 'https://www.linkedin.com/in/zainazraizaaba/?originalSubdomain=my',
      bio: 'Zain Azrai bin Dato’ Dr. Zaaba is a seasoned HR professional, currently serving as the Vice President for Rewards & People Management, Human Capital, at Lembaga Tabung Angkatan Tentera (LTAT), a statutory body under the Malaysian Ministry of Defense that invests and manages military personnel’s pension fund. With over two decades of experience, Zain has honed his expertise through various roles in HR consulting firms such as Korn Ferry (formerly HayGroup) and Kincentric, as well as in HR operations at prominent organizations including KWAP, KPOC, and UEM Edgenta. His dedication to optimizing human capital strategies and his proficiency in managing Total Rewards underscores his commitment to ensuring employee retention and attraction. Zain’s leadership and strategic vision continue to drive LTAT towards achieving its business objectives.',
    },
    {
      id: 22,
      name: 'Nazrul Effendy M Isa',
      position: 'General Manager, Total Rewards, Petronas',
      company: 'Petronas',
      image: '/assets/images/speakers/speaker-images/Petronas_speaker_2_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Petronas_logo.png',
      linkedIn: 'https://www.linkedin.com/in/m-nazrul-effendy-6659ab5a/?originalSubdomain=my',
      bio: 'Nazrul is a seasoned HR professional with over 18 years of experience, specialising in rewards. In his current role, he shapes various reward strategies and frameworks that align with evolving business needs and support talent attraction and retention. He also brings strong expertise in HR mergers and acquisitions, having managed complex multi-country deals and organisational integrations. Nazrul is globally affiliated as a Chartered Member of the CIPD and a Global Remuneration Professional (GRP) with WorldatWork, USA. He believes purpose-driven, equitable, and transparent reward strategies are key to driving performance by reinforcing the right behaviours and actions.',
    },
    {
      id: 23,
      name: 'Andrea Ong',
      position: 'Head, Product & Innovation TROOPERS',
      company: 'TROOPERS',
      image: '/assets/images/speakers/speaker-images/Troopers_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Troopers_logo.png',
      linkedIn: 'https://www.linkedin.com/in/ongandrea/',
      bio: 'Andrea Ong is a product & innovation leader with over 9 years of experience spanning start-ups, scale-ups, and large corporations across Southeast Asia and Europe. As Head Product & Innovation at Troopers, she drives digital innovation in the SEAn gig ecosystem using AI, ML, and Automation—turning manual journeys into seamless, automated processes. Previously, Andrea led regional and global innovation projects at TikTok for Business, optimising operations across eight European markets through digital innovation. Her career includes shaping digital banking at Maybank, launching Malaysia’s first e-wallet at Digi, and accelerating the adoption of crypto custody services at Copper. Armed with a Master’s from Warwick Business School, Andrea is known for translating complex insights into clear, actionable strategies. She thrives at the intersection of product, technology, and business—and is passionate about making future-of-work solutions in SEA more human, inclusive, and scalable.',
    },
    {
      id: 24,
      name: 'Shubham Raizada',
      position: 'Director, HCM Solution Advisory, APAC ORACLE',
      company: 'ORACLE',
      image: '/assets/images/speakers/speaker-images/Oracle_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Oracle_logo.png',
      linkedIn: 'https://www.linkedin.com/in/shubham-raizada%E2%98%81-515b6a11/',
      bio: 'Shubham Raizada is the Director of HCM Solution Advisory for Oracle APAC. In this role, he acts as a trusted advisor for enterprises and provides insights on the latest innovation and trends in HCM. Shubham is also a seasoned speaker on the topic of HCM innovations, cloud and AI.',
    },
    {
      id: 25,
      name: 'Dr Hari Nair',
      position: 'Principle SAP',
      company: 'SAP',
      image: '/assets/images/speakers/speaker-images/SAP_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/SAP_logo.png',
      linkedIn: 'https://www.linkedin.com/in/hariapnair/',
      bio: 'Hari Nair is currently a Principal Consultant on Human Capital Management with SAP. In his previous stint, he was Head of HR Transformation in Celcom Axiata Bhd. Previously, he led the Continuous Improvement & Business Partnership function in BASF PETRONAS Malaysia and Talent Engagement & HR transformation functions in Maxis Group companies in both India & Malaysia. Prior to that, he was CHRO of CoreObjects Inc & Envision Inc. both being US based software product companies. Hari is a veteran who served as a Commissioned Officer in the Indian Army. Hari specialises in HR Transformation projects for improving internal processes and procedures within demanding environment, project deadlines and budgets. He researches on application of Artificial intelligence, machine learning, data analytics and digitisation in HR function. Hari is a Ph.D. in Human Resources Management and is a Chartered Member of CIPD, UK and is a standing member of Standards Malaysia. He has presented and published several articles on contemporary HR issues in international journals and conferences.',
    },
    {
      id: 26,
      name: 'Pooja Jain',
      position: 'Founder, The Growth Perspective ',
      company: 'The Growth Perspective',
      image: '/assets/images/speakers/speaker-images/The_Growth_Perspective_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/The_Growth_Perspective_logo.png',
      linkedIn: 'https://www.linkedin.com/in/pooja-j-85411810/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=sg',
      bio: "Pooja Jain is the Founder of The Growth Perspective, a Singapore-based learning strategy consultancy. With over 20 years of experience across corporate, enterprise, and education sectors, Pooja has impacted half a million learners through her work with Malaysia's Ministry of Education. She works with organisations to embed capability-building into HR systems and approach AI integration critically. Pooja is known for cutting through hype and trends with sharp insights and uncomfortable truths, the kind the industry needs to hear if they want HR initiatives to deliver ROI. At HRD Conference 2025, she will share insights on how HR can align learning, capability, and AI for meaningful organisational transformation.",
    },
    {
      id: 27,
      name: 'Nisha Meng Ming Li',
      position: "Chief Executive Officer",
      company: "LAUREA PEOPLE'S SIGNATURE",
      image: '/assets/images/speakers/speaker-images/Laurea_People_Signature_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Laurea_People _Signature_logo.png',
      linkedIn: 'https://www.linkedin.com/in/nishamengmingli/?originalSubdomain=my',
      bio: "Nisha Meng Ming Li is the CEO of Laurea People’s Signature (LPS), a top B2B Martech agency in Asia blending AI innovation with emotionally intelligent branding. A high-impact brand strategist, she specializes in AI-driven PR, smart market intelligence, and bespoke system development for scalable digital growth. With over a decade of cross-market experience, she partners with governments, MNCs, and SMEs to build future-ready brands that connect, convert, and endure. Under her leadership, LPS has been recognized by SME100, APAC Insider Southeast Asia Business Awards, and other innovation forums for excellence in AI-led branding and marketing, IT Tech solutions.",
    },
    {
      id: 28,
      name: 'Muntaha Mussarat',
      position: "Head of HR – East Asia SLB",
      company: "SLB",
      image: '/assets/images/speakers/speaker-images/Schlumberger_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/SLB_logo.png',
      linkedIn: 'https://my.linkedin.com/in/muntaha-mussarat-66721218',
      bio: "Muntaha Mussarat is an accomplished HR leader with 10+ years of experience across regions. As Head of HR for East Asia at Schlumberger, she drives strategic operations and fosters inclusive workplace cultures. With an MBA from SZABIST and a BBA in Finance from Lahore School of Economics, she’s recognized for pioneering HR models, promoting gender balance, and ensuring compliance. Her efforts in talent attraction and retention have earned multiple employer-of-choice accolades, underscoring her impact and leadership.",
    },
    {
      id: 29,
      name: 'Teh Sook Ling',
      position: "Executive Director",
      company: "Selangor Human Resource Development Centre (SHRDC)",
      image: '/assets/images/speakers/speaker-images/Selangor_hrdc_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Selangor_HRDC_logo.png',
      linkedIn: 'https://www.linkedin.com/in/sookling-teh-2a335b27/?originalSubdomain=my',
      bio: "With over 18 years of experience in training and assessment, Ms. Teh Sook Ling brings a wealth of expertise and insight to the field of talent development. As the Executive Director of SHRDC, she is a results-driven leader known for her strategic management, commitment to quality, and strong industry collaboration both locally and internationally. Under her leadership, SHRDC has maintained high training standards through a robust quality management system and has played a pivotal role in advancing digital transformation in education. Her efforts have significantly impacted workforce development in the manufacturing sector, particularly in addressing the challenges of hiring and retaining top talent.",
    },
    {
      id: 30,
      name: 'Vivek Patni',
      position: "Head of Europe and APAC Sales",
      company: "TaskHuman",
      image: '/assets/images/speakers/speaker-images/TaskHuman_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/TaskHuman_logo.png',
      linkedIn: 'https://www.linkedin.com/in/vivek-patni/?originalSubdomain=uk',
      bio: "Vivek is leading the international expansion of TaskHuman across Europe, the Middle East, and APAC. He focuses on bringing scalable, AI-powered coaching to new markets, helping organisations leverage technology to deliver authentic, personalised development at scale. His work sits at the intersection of AI and human capital potential, empowering the workforce of tomorrow through smarter, more human-centric learning.",
    },
    {
      id: 31,
      name: 'Leslie Loh',
      position: "Founder & CEO",
      company: "eduCLaaS",
      image: '/assets/images/speakers/speaker-images/Educlaas_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Educlaas_logo.png',
      linkedIn: 'https://www.linkedin.com/in/leslie-loh-92778b8a/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=sg',
      bio: "Leslie Loh is a seasoned entrepreneur who built a tech start-up into a multinational firm and invested in over 40 ventures. As Founder and CEO of eduCLaaS, he drives applied learning across Asia. His public service includes roles at IMDA, ESG, and IPOS International, helping shape Singapore’s innovation agenda. Honored with national awards like Entrepreneur of the Year and IT Leader of the Year, Leslie continues to champion digital education and workforce development throughout the region.",
    },
    {
      id: 32,
      name: 'Helmi Yusoff',
      position: "Principal Consultant",
      company: "Mercer",
      image: '/assets/images/speakers/speaker-images/Mercer_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Mercer_logo.png',
      linkedIn: 'https://www.linkedin.com/in/helmi-yusoff/?originalSubdomain=sg',
      bio: "Helmi Yusoff, Principal Consultant at Mercer, leads the South East Asia Rewards Practice with over 14 years of HR consulting expertise. He specializes in rewards strategy, incentive design, and performance frameworks, serving diverse sectors from consumer goods to sovereign wealth funds. With regional experience across Asia, including Brunei, Helmi brings deep insight into cross-cultural business environments. Based in Singapore, he drives strategic projects for regional conglomerates and mentors Mercer teams across Southeast Asia in delivering complex consulting engagements.",
    },
    {
      id: 33,
      name: 'Usha Devi',
      position: "Head of Talent Management & Organisation Development",
      company: "UOB",
      image: '/assets/images/speakers/speaker-images/UOB_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/UOB_logo.png',
      linkedIn: 'https://www.linkedin.com/in/usha-devi-3b4a9ab9/?originalSubdomain=my',
      bio: "Ms. Usha Devi Muthusamy is the Head of Talent Management and Organisational Development at United Overseas Bank (UOB Malaysia). With more than 20 years of distinguished experience across the financial services and consulting sectors, Usha is a recognised expert in succession planning, leadership development, and organisational culture transformation across the region. Usha has a unique ability to distil complex talent strategies into clear, actionable pathways. Her intuitive yet structured approach to leadership development enables emerging leaders to grow with purpose and clarity, unlocking the confidence needed to realise their full potential.",
    },
  ];

  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof speakers)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSpeakerModal = (speaker: (typeof speakers)[0]) => {
    setSelectedSpeaker(speaker);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSpeakerModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <section id="speakers">
      <div className="speakers-bg-shape"></div>
      <div className="speakers-bg-overlay"></div>
      <div className="speakers-pattern"></div>
      <div className="position-relative container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title pb-50 text-center">
              <h2 className="title">Our Speakers</h2>
              <p className="text mt-30">
                Meet our expert speakers who will share their knowledge and insights during the
                conference. These industry leaders bring valuable experience to make this event
                truly special.
              </p>
            </div>
          </div>
        </div>

        <div className="row speaker-grid">
          {speakers.map(speaker => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={`speaker-${speaker.id}`}>
              <button
                className="single-speaker"
                data-speaker-id={speaker.id}
                onClick={() => openSpeakerModal(speaker)}
                aria-label={`View details for ${speaker.name}`}
              >
                <div className="speaker-image-container">
                  <div className="speaker-image">
                    <Image src={speaker.image} alt={speaker.name} width={150} height={150} />
                  </div>
                  <div className="speaker-social">
                    <a
                      href={speaker.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="linkedin"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#0077B5"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="speaker-info">
                  <h4>{speaker.name}</h4>
                  <span className="position">{speaker.position}</span>
                  <span className="company">{speaker.company}</span>
                  <div className="company-logo">
                    <Image src={speaker.companyLogo} alt={speaker.company} width={90} height={35} />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <SpeakerModal speaker={selectedSpeaker} isOpen={isModalOpen} onClose={closeSpeakerModal} />
    </section>
  );
};

export default Speakers;
