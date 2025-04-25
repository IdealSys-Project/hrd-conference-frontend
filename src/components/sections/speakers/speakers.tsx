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
      bio: 'Eng Hooi is an accomplished author, learning and development practitioner, and executive coach with over 15 years of corporate and consulting experience. As a former head of organization development and Global Master Coach at a leading technology firm in Asia, he spearheaded talent development strategies and fostered a coaching culture for sustainable growth. Eng Hooi co-led global coaching task forces, designing and implementing coaching initiatives and certification programs for leaders worldwide. Locally, he has held various HR roles, including learning and development, talent management, and HR innovation. He authored Building a Sustainable Coaching Culture: A Step-by-Step Guide to Coaching Culture Implementation'
    },
    {
      id: 2,
      name: 'Yanuar Kurniawan',
      position: 'People Development & Learning Director',
      company: 'L\'Oréal Indonesia',
      image: '/assets/images/speakers/speaker-images/LOREAL_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Loreal_logo.png',
      linkedIn: 'https://www.linkedin.com/in/yanuar-kurniawan/',
      bio: 'Yanuar Kurniawan is a seasoned leader in Human Resources, currently serving as People Development and Learning Director at L\'Oréal Indonesia. He brings extensive experience from diverse roles across Southeast Asia, having served as Senior Vice President for Talent and Leadership development for Lazada Group and for Organization, Talent Development, and Organization Culture at Lazada Indonesia.\n\nBefore joining Lazada, Yanuar honed his expertise in organizational effectiveness and leadership development as an Associate Principal at Korn Ferry Indonesia and managed assessment centers and leadership training programs at Mitsubishi Fuso - Daimler AG in Tokyo. His strong analytical background, complemented by an MBA and experience as a P&G Finance Manager, enables him to effectively evaluate and understand the financial and business impact of HR initiatives.\n\nYanuar is a recognized thought leader, named a LinkedIn Top Voice in 2024, and a sought-after speaker at international conferences, sharing his insights on HR Transformation, Organization Development, Culture, and Learning & Development. He is passionate about fostering impactful HR initiatives, improving employee engagement, driving organizational culture change, and developing talent to reach its full potential.'
    },
    {
      id: 3,
      name: 'Mallory Loone',
      position: 'Co-founder & Lead Trainer',
      company: 'Work Inspires',
      image: '/assets/images/speakers/speaker-images/Works_Inspire_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Workinspires_logo.png',
      linkedIn: 'https://www.linkedin.com/in/mallory-loone/',
      bio: 'Mallory Loone is the co-founder of Work Inspires, a people engagement and development company, who has worked with many Fortune 500 companies, both locally and abroad, customising for different levels of employees. Mallory also speaks for platforms like BFM 89.9, The Economist Impact, HRM Asia, HR Tech Festival and many more.\n\nHer experiences in the people development scene have earned her the recognition of Malaysia\'s Most Talented Coach, 2019 by the World HRD Congress, Top 100 LinkedIn Icons to Follow in Malaysia by Marketing in Asia, 2020 and was a 4-time TEDx Speaker. Work Inspires has also been awarded the Employee Engagement Consultancy by HR Vendor Award 2022, 2023 and 2024, Best Management Trainee Consultant 2023, Best Instructional Design 2024 and Local Hero award for the HR Vendor of the Year Awards 2023.\n\nWork Inspires has also won the SME100 award in 2023. She continues to contribute to society by mentoring startups and youths. Mallory is also on the ASEAN Human Development Organisation Malaysia board and a Talent Fellow (TF50)underTalentCorp.'
    },
    {
      id: 4,
      name: 'Dr Najwa Hanim Md Rosli',
      position: 'Consultant Neuropsychiatrist',
      company: 'Avisena Specialist Hospital',
      image: '/assets/images/speakers/speaker-images/Avisena_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Avisena_logo.png',
      linkedIn: 'https://www.linkedin.com/in/dr-najwa-rosli-neuropsychiatrist-and-mental-health-speaker-0645a25/',
      bio: 'Dr. Najwa Rosli is a Consultant Neuropsychiatrist at Avisena Specialist Hospital in Shah Alam. She has over a decade of experience teaching psychiatry at IIUM and previously served as an Associate Professor at UiTM (2021) and MSU (2022).\n\nPassionate about mental health education and advocacy, she speaks at conferences, training sessions, and community events, sharing strategies for resilience, emotional well-being, and mental wellness. She is trained in various psychotherapeutic approaches, including CBT, ACT, DBT, and Psychodynamic Psychotherapy.\n\nBelieving that mental health should be a conversation, not a stigma, she actively engages through public speaking and social media (@ShrinkingWithNajwa) to make support more accessible. Her goal: to help others navigate life with understanding, resilience, and self-compassion.'
    },
    {
      id: 5,
      name: 'Dr. Murugappan',
      position: 'Chief Human Resource Officer',
      company: 'Malaysian Communications Multimedia Commission (MCMC)',
      image: '/assets/images/speakers/speaker-images/MCMC_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/MCMC_logo.png',
      linkedIn: 'https://www.linkedin.com/in/dr-murugappan-hr-strategist/?originalSubdomain=my',
      bio: 'Dr. Murugappan is an advocate of value translation and worked with multinational corporations (MNCs) from diverse sectors as well as the public sector with a career span of 30 years to date.\n\nBecame a researcher, thinker, teacher, and guide by choice. Continuously polishing the leadership traits in him. A lifelong learner, having specific interest in digital leadership, evidence-based management (EBM), people analytics, total rewards strategy, human capital financial statement, project management and process improvement.\n\nHe focuses on organizational leadership and strategic people practices adding value to both customers and investors. This is facilitated by developing leaders, creating better solutions, and co-creating people centered holistic, and end user initiatives. Leading self and organization to awards and accolades locally and globally for good people management practices. Authored and published a book and articles in academic and industry journals. He is appointed to few Industries Advisory Panel in local public and private universities.'
    },
    {
      id: 6,
      name: 'Tasha Ho',
      position: 'Head, Talent Management',
      company: 'Sunway Group',
      image: '/assets/images/speakers/speaker-images/Sunway_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Sunway_logo.png',
      linkedIn: 'https://www.linkedin.com/in/tasha-ho-b6792335/?originalSubdomain=my',
      bio: 'With 13 years of extensive experience in the HR field, Tasha has successfully overseen a wide range of HR functions, including business partnering, performance management, talent management, employer branding, employee experience, and learning & development. She has honed her expertise across diverse industries, from conglomerates and multinational companies to the fashion sector.\n\nAs a certified practitioner in various psychometric tools such as Hogan Assessments, DISC, PPA, and Harrison Assessment, she leverages data-driven insights to drive strategic people initiatives. Being a change agent and Organizational Development (OD) specialist, Tasha is passionate about building future-ready talent pipelines that support the long-term growth strategies of the businesses.\n\nShe enjoys working with diverse groups of people from different background and expertise.'
    },
    {
      id: 7,
      name: 'Datin Ts. Habsah Nordin',
      position: 'Head Artificial Intelligence Centre of Excellence',
      company: 'PETRONAS',
      image: '/assets/images/speakers/speaker-images/PETRONAS_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/PETRONAS_logo.png',
      linkedIn: 'https://www.linkedin.com/in/datin-ts-habsah-nordin-cdmp-csfc-caitl%E2%84%A2-4a4aa859/',
      bio: 'Datin Ts. Habsah Nordin leads the PETRONAS Artificial Intelligence Center of Excellence, driving AI strategy, governance, ethics, and technology enablement. She fosters a culture of pervasive AI, creating value organization-wide. Previously, she institutionalized the Data Center of Excellence, advancing data liberation, the Enterprise Data Hub (EDH), and scaling advanced analytics. She also spearheaded PETRONAS\' knowledge management digital transformation, integrating structured and unstructured data.\n\nA PETRONAS veteran since 1995, she has held leadership roles in IT, Strategic Planning, Business Development, and more. Habsah holds a B.Sc. in Computer Science from Case Western Reserve University, completed leadership programs at INSEAD and Duke University, and is a certified coach and AI transformation leader.\n\nCurrently, she serves as the President of the DAMA Malaysia Forming Chapter. Recognized for her work in data and AI, she received the Visionary award at the SPARK Asia 200 Digital Leaders Award 2023.'
    },
    {
      id: 8,
      name: 'Amardeep Singh Toor',
      position: 'Partner',
      company: 'Lee Hishammuddin Allen & Gledhill',
      image: '/assets/images/speakers/speaker-images/LHAG_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/LHAG_logo.png',
      linkedIn: 'https://www.linkedin.com/in/amardeepsinghtoor/?originalSubdomain=my',
      bio: 'Amardeep is recognised as a "Next Generation Partner" by The Legal 500 Asia-Pacific 2025, ranked "Band 4" by Chambers Asia-Pacific 2025, a "Rising Star" by asialaw 2024, and a "Future Star" by Benchmark Litigation Asia-Pacific 2024, in the field of Labour and Employment. Amardeep is often commended for his outstanding communication skills, quality of work, timeliness, and pragmatic approach.\n\nAmardeep was also recommended by The Legal 500 for immigration law and the management of foreign workers. He recently won "Young Lawyer of the Year" in the Asian Legal Business Awards – Malaysia 2024 and received an Honourable Mention in the "Malaysia Lawyer of the Year" category in the asialaw\'s Client Choice Awards 2024.\n\nHe was also recognised as a "Rising Star" in the Asian Legal Business – Malaysia 2022, an annual listing of lawyers under the age of 40 who are delivering high-quality work, earning accolades from their colleagues, superiors, and clients. He also contributed to Malaysian Chapter of the Chambers Employment 2023 Global Practice Guide. He has contributed several articles to the Industrial Law Reports published by The Malaysian Current Law Journal and is a regular speaker at the national Industrial Relations Law Conference and Malaysian Employment Law Conference. Amardeep is a member of the Bar Council\'s Industrial & Employment Law Committee and chairs the Practitioner Issues sub-committee.'
    },
    {
      id: 9,
      name: 'Rachel Biancotti',
      position: 'Global Talent Acquisition',
      company: 'Nestlé',
      image: '/assets/images/speakers/speaker-images/Nestle_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Nestle_logo.png',
      linkedIn: 'https://my.linkedin.com/in/rachel-biancotti',
      bio: 'Rachel is a seasoned professional with over 20 years of experience in talent acquisition. Throughout their career, Rachel has navigated various recruitment models and led teams recruiting for different functions, positions, and countries.\n\nShe has witnessed the evolution of talent acquisition processes from predominantly paper-based methods to the current digital era where AI is increasingly being adopted. One of Rachel\'s key strengths is her empathy, which ensures that while leveraging AI and other technological tools, the human touch remains at the forefront, creating a personalized and engaging experience for candidates.'
    },
    {
      id: 10,
      name: 'Herman Cahyadi',
      position: 'Head of People',
      company: 'Gojek Indonesia',
      image: '/assets/images/speakers/speaker-images/GOTO_speaker_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/GOTO_logo.svg.png',
      linkedIn: 'https://www.linkedin.com/in/herman-cahyadi-70138317/',
      bio: 'Herman Cahyadi is an accomplished HR transformational leader with over 20 years of experience driving organizational success through strategic HR initiatives. He has held pivotal roles, including Head of People at Gojek Indonesia and Head of HR Operations at PT GOTO Gojek Tokopedia, Tbk.\n\nA Doctorate in Management Science complements his expertise in areas such as HR strategy, organizational development, talent management, and shared services. With a robust track record in industries like banking, manufacturing, and technology, Herman excels in workforce optimization, mergers, and organizational transformation.\n\nHe is also a dedicated academic, lecturing in Strategic and Human Resources Management at Tarumanagara University.'
    },
    {
      id: 11,
      name: 'Najmie Nordin',
      position: 'Chief Talent Officer',
      company: 'Johor Corporation',
      image: '/assets/images/speakers/speaker-images/JCorp_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/JCorp_logo.png',
      linkedIn: 'https://www.linkedin.com/in/najmienoordin/',
      bio: 'Najmie holds a Manchester Global MBA from the University of Manchester, alongside a Bachelor of Law (Hons) from Universiti Teknologi MARA, reflecting a formidable academic foundation. His skill set spans various domains, encompassing adeptness in people management, strategic sales planning, dynamic branding, and innovative marketing strategies.\n\nBefore embarking on his journey with JCorp, Najmie played pivotal roles at Cosmopoint Sdn Bhd, including Chief Executive Officer (Group) and Chief Operating Officer (Group). His track record underscores a commitment to driving organisational excellence and fostering sustainable growth, marking him as a formidable force in the corporate landscape.'
    },
    {
      id: 12,
      name: 'Mohamed Parrish Ersalle',
      position: 'Chief Human Resources Officer',
      company: 'Global Turbine Asia',
      image: '/assets/images/speakers/speaker-images/Global_Turbine_Asia_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Global_Turbine_Asia_logo.png',
      linkedIn: 'https://www.linkedin.com/in/mohamed-parrish-ersalle-b5a47b46/',
      bio: 'Mohamed Parrish Ersalle boasts over 30 years of Human Resources experience across manufacturing, financial services, property management, aviation, and consulting industries. He began his career at Nestle Foods (M) Sdn. Bhd. as a Management Trainee, gaining early exposure to Collective Agreement negotiations. He later held the position of Head of Human Resources Relations before moving to BASF (M) Sdn. Bhd. as a Training Manager focusing on recruitment and development.\n\nIn financial services, Mohamed served as Group Head of HR at Allianz Malaysia Berhad, earning the HR Director of 2010 award at the South East Asia HR Excellence Awards. At Prudential BSN Takaful, he was the Chief Human Resources Officer, driving HR strategies. Further career highlights include leading HR initiatives at Sapura Resources Berhad, Agrobank (serving over 3,450 employees), and later working as a freelance HR consultant. In 2023, he featured as a speaker at AKPK\'s The Insights, discussing financial stress and mental well-being.\nCurrently, Mohamed is the Chief Human Resources Officer of Global Turbine Asia (GTA), overseeing HR strategies for a major MRO service provider in Asia Pacific\'s military and civil aviation sectors. He is renowned for his leadership in HR transformation and strategic planning.'
    },
    {
      id: 13,
      name: 'Edalyn "Lyn" D. Hadjula-Legarde',
      position: 'People & Culture Director',
      company: 'Friesland Campina',
      image: '/assets/images/speakers/speaker-images/Friesland_Campina_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Friesland_Compina_logo.png',
      linkedIn: 'https://www.linkedin.com/in/lyn-hadjula-legarde-chrme-csphr-94029aa/',
      bio: 'Lyn is an accomplished HR leader with over 25 years of experience in People and Culture Strategy and Management across multinational and local organizations. She is passionate about Inclusion and Diversity, Talent and Leadership Development, and Strategic Rewards. Lyn has worked with renowned brands such as AMA Group of Companies, Emerson Electric Asia Ltd, Red Ribbon Bakeshop Inc. (part of the Jollibee group), Philip Morris Asia Ltd, and Alaska Milk Corporation. Currently, she serves as the Country People and Culture Director for Dutch Lady Milk Industries – Malaysia Berhad, under Royal FrieslandCampina (RFC).\nLyn has successfully led organizational transformation interventions, driving innovative HR solutions to foster growth and build strong organizational cultures. Under her leadership, Alaska was certified as a Great Place to Work and achieved recognition for its Talent Management and Leadership Programs. At Dutch Lady, she continues to drive cultural transformation as RFC adopts a new business model, with the company earning Top Employer recognition in Malaysia for two consecutive years.\nAn active contributor to the HR community, Lyn has judged HR awards in the Philippines and Malaysia, and spoken at forums on topics like Artificial Intelligence in HR and Inclusion and Diversity. She holds multiple prestigious HR certifications and a strong academic background, complementing her advocacy and leadership.'
    },
    {
      id: 14,
      name: 'Eveliene Witjes',
      position: 'Global Head of Human Resources',
      company: 'TiNDLE Foods',
      image: '/assets/images/speakers/speaker-images/Tindle_Food_crop.png',
      companyLogo: '/assets/images/speakers/company-logos/Tindle_logo.png',
      linkedIn: 'https://sg.linkedin.com/in/eveliene-witjes-83355018',
      bio: 'Eveliene Witjes is an entrepreneur and Human Resources Management Specialist with over 20 years of professional experience; of which 16 years in core Human Resource Management roles. She has a proven ability in developing an HR department from ground up and in continuous managing the HR operations of start-up/medium and larger sized companies. She holds a strong command in core HR functions such as Recruitment, Learning & Development, Performance Management, Employee Retention, Payroll, Onboarding and Succession Planning, Policies & Procedures, International Mobility, Health & Safety, Regulatory & Affairs, Legal mediation, Strategic planning and budgeting, Taxation and has helped many different types of organizations with their transformation from scaling to restructuring and M&A\'s.'
    }
  ];
  
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSpeakerModal = (speaker: typeof speakers[0]) => {
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
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center pb-50">
              <h2 className="title">Our Speakers</h2>
              <p className="text mt-30">
                Meet our expert speakers who will share their knowledge and insights during the conference. These industry leaders bring
                valuable experience to make this event truly special.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row speaker-grid">
          {speakers.map((speaker) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={`speaker-${speaker.id}`}>
                <button
                  className="single-speaker"
                  data-speaker-id={speaker.id}
                  onClick={() => openSpeakerModal(speaker)}
                  aria-label={`View details for ${speaker.name}`}
                >
                  <div className="speaker-image-container">
                    <div className="speaker-image">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="speaker-social">
                      <a
                        href={speaker.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="speaker-info">
                    <h4>{speaker.name}</h4>
                    <span className="position">{speaker.position}</span>
                    <span className="company">{speaker.company}</span>
                    <div className="company-logo">
                      <Image
                        src={speaker.companyLogo}
                        alt={speaker.company}
                        width={90}
                        height={35}
                      />
                    </div>
                  </div>
                </button>
              </div>
          ))}
        </div>
      </div>
      
      <SpeakerModal 
        speaker={selectedSpeaker} 
        isOpen={isModalOpen} 
        onClose={closeSpeakerModal} 
      />
    </section>
  );
};

export default Speakers;
