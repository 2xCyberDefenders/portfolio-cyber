'use strict';
/* =====================================================================
   CONTENU DU SITE : c'est LE fichier à modifier pour changer les textes.
   Chaque texte existe en français (fr) et en anglais (en).
   ===================================================================== */

const CONFIG = {
  email: ['karine.queiros', 'efrei.net'],   // affiché en prenant "karine.queiros" + "@" + "efrei.net"
  links: {                                   // URLs complètes en https:// ; laisser '' pour masquer
    'GitHub': '',
    'LinkedIn': '',
    'Hack The Box': '',
    'TryHackMe': ''
  },
  cvPdf: ''                                  // ex: 'cv.pdf' (fichier à ajouter dans le dossier) ; '' pour masquer
};

/* Syntaxe des listes de lignes :
     '# titre'        -> titre cyan
     '! texte'        -> mise en avant jaune
     '- texte'        -> puce
     'texte'          -> ligne normale
     ''               -> ligne vide                                        */

const CONTENT = {

  /* ============================== FRANÇAIS ============================== */
  fr: {
    about: [
      '# whoami',
      'Étudiante en 2e année de Bachelor Cybersécurité & Ethical Hacking à l\'EFREI.',
      'Attirée par la sécurité offensive et le pentest, je progresse par la pratique sur Hack The Box et TryHackMe.',
      '',
      '! Recherche : stage / alternance en pentest ou Red Team.'
    ],

    skills: [
      '# skills --list',
      '! Systèmes',
      'Linux et Windows (utilisateurs, droits, services, journaux), Active Directory, virtualisation',
      '! Réseaux',
      'TCP/IP, TCP/UDP, DNS, HTTP/S, SMB, SSH, DHCP, ARP, pare-feu',
      '! Sécurité',
      'Pentest, analyse de vulnérabilités, sécurité web (OWASP Top 10), détection et analyse d\'alertes',
      '! Outils offensifs',
      'Nmap, Metasploit, Burp Suite, Hydra, Gobuster',
      '! Analyse & détection',
      'Wireshark, tcpdump, Suricata, Snort, Splunk, Elastic',
      '! Scripting',
      'Bash, Python'
    ],

    exp: [
      '# experience --history',
      '! SOC Analyst - Stage, campus Engie  [Avril - Juin 2026]',
      '- Analyse et traitement d\'alertes de sécurité (phishing, activités suspectes)',
      '- Surveillance via SIEM et analyse de logs (Event Logs, Sysmon)',
      '- Identification d\'attaques courantes (Kerberos)',
      '- Participation aux investigations d\'incidents de sécurité',
      '- Création d\'un site web',
      '',
      '! Proche aidant  [Juin 2024 - Juillet 2025]',
      '- Gestion de la journée, hygiène, ménage, aide à la prise de repas'
    ],

    formation: [
      '# formation --certs --lang',
      '! Bachelor Cybersécurité & Ethical Hacking  [2025 - 2028]',
      'EFREI Paris',
      '',
      '! Certification',
      'eJPT (INE) - obtenue',
      '',
      '! Langues',
      'Anglais B2 (TOEIC)',
      '',
      '! Hors écran',
      'Salle de sport, gymnastique en compétition pendant 10 ans, labs et challenges'
    ],

    /* ---- LETTRE DE MOTIVATION : modifie les textes entre guillemets ----
       Chaque élément de "paragraphs" = un paragraphe. Ajoute/supprime des lignes à volonté
       (garde les guillemets et la virgule à la fin de chaque ligne).           */
    letter: {
      title:    'cat lettre_de_motivation.txt',
      subject:  'Objet : candidature stage / alternance en pentest ou Red Team',
      greeting: 'Madame, Monsieur,',
      paragraphs: [
        'Étudiante en 2e année de Bachelor Cybersécurité & Ethical Hacking à l\'EFREI, je souhaite rejoindre votre équipe pour un stage ou une alternance en test d\'intrusion ou Red Team. La sécurité offensive est le domaine où je m\'investis le plus : labs et challenges réguliers sur Hack The Box et TryHackMe, et certification eJPT (INE) obtenue.',
        'Mon stage de SOC Analyst sur le campus d\'Engie m\'a donné la vision défensive : traitement d\'alertes (phishing, activités suspectes), analyse de logs via SIEM (Event Logs, Sysmon), identification d\'attaques comme celles visant Kerberos, participation à des investigations. Savoir ce qu\'un défenseur voit me permet de penser comme un attaquant tout en connaissant les traces qu\'il laisse.',
        'Côté technique, j\'évolue sur des environnements Linux et Windows, avec une bonne compréhension d\'Active Directory. Je suis à l\'aise avec les fondamentaux réseaux (TCP/UDP, DNS, SSH, DHCP, ARP) et avec l\'administration système : gestion des utilisateurs, des droits et des ACL, services et journaux système (journald, syslog), ainsi que des outils comme fail2ban ou rsync. Je pratique régulièrement Nmap, Metasploit, Burp Suite, Hydra ou Gobuster sur des labs d\'énumération et d\'exploitation. J\'ai aussi une expérience du scripting pour automatiser des tâches ou analyser des données, et je m\'adapte facilement à de nouveaux outils selon les besoins du terrain.',
        'Mon année comme proche aidante m\'a appris la rigueur, l\'autonomie et le sens des responsabilités ; dix ans de gymnastique en compétition, la discipline et la persévérance.',
        'Je serais ravie de mettre ces compétences au service de vos missions et d\'en discuter lors d\'un entretien.'
      ],
      closing:   'Cordialement,',
      signature: 'Karine Queiros'
    },

    help: [
      '# help',
      'about      qui suis-je',
      'skills     compétences',
      'exp        expériences',
      'formation  formation, certification, langues',
      'letter     lettre de motivation',
      'contact    comment me joindre',
      'lang       changer de langue (FR/EN)',
      'clear      effacer l\'écran'
    ],

    ui: { hint: 'Tape "help" ou clique sur une commande ci-dessus.', unknown: 'commande inconnue : ', cv: 'Télécharger le CV (PDF)' }
  },

  /* ============================== ENGLISH ============================== */
  en: {
    about: [
      '# whoami',
      '2nd-year Bachelor student in Cybersecurity & Ethical Hacking at EFREI.',
      'Drawn to offensive security and pentesting, I grow through hands-on practice on Hack The Box and TryHackMe.',
      '',
      '! Looking for: internship / work-study in pentesting or Red Team.'
    ],

    skills: [
      '# skills --list',
      '! Systems',
      'Linux and Windows (users, permissions, services, logs), Active Directory, virtualization',
      '! Networking',
      'TCP/IP, TCP/UDP, DNS, HTTP/S, SMB, SSH, DHCP, ARP, firewalls',
      '! Security',
      'Pentesting, vulnerability analysis, web security (OWASP Top 10), alert detection and analysis',
      '! Offensive tools',
      'Nmap, Metasploit, Burp Suite, Hydra, Gobuster',
      '! Analysis & detection',
      'Wireshark, tcpdump, Suricata, Snort, Splunk, Elastic',
      '! Scripting',
      'Bash, Python'
    ],

    exp: [
      '# experience --history',
      '! SOC Analyst - Internship, Engie campus  [Apr - Jun 2026]',
      '- Triaged and handled security alerts (phishing, suspicious activity)',
      '- Monitored events via SIEM and analyzed logs (Event Logs, Sysmon)',
      '- Identified common attacks (Kerberos)',
      '- Took part in security incident investigations',
      '- Built a website',
      '',
      '! Family caregiver  [Jun 2024 - Jul 2025]',
      '- Daily routine management, hygiene, housekeeping, meal assistance'
    ],

    formation: [
      '# formation --certs --lang',
      '! Bachelor in Cybersecurity & Ethical Hacking  [2025 - 2028]',
      'EFREI Paris',
      '',
      '! Certification',
      'eJPT (INE) - obtained',
      '',
      '! Languages',
      'English B2 (TOEIC)',
      '',
      '! Off-screen',
      'Gym, competitive gymnastics for 10 years, labs and challenges'
    ],

    letter: {
      title:    'cat cover_letter.txt',
      subject:  'Subject: application for a pentest / Red Team internship or work-study',
      greeting: 'Dear Sir or Madam,',
      paragraphs: [
        'I am a 2nd-year Bachelor student in Cybersecurity & Ethical Hacking at EFREI, and I would like to join your team for an internship or work-study in penetration testing or Red Team. Offensive security is where I invest the most: regular labs and challenges on Hack The Box and TryHackMe, and an eJPT (INE) certification.',
        'My SOC Analyst internship on the Engie campus gave me the defensive view: alert handling (phishing, suspicious activity), log analysis through SIEM (Event Logs, Sysmon), identification of attacks such as those targeting Kerberos, and participation in investigations. Knowing what a defender sees lets me think like an attacker while knowing the traces left behind.',
        'On the technical side, I work with Linux and Windows environments, with a good understanding of Active Directory. I am comfortable with networking fundamentals (TCP/UDP, DNS, SSH, DHCP, ARP) and with system administration: user, permission and ACL management, services and system logs (journald, syslog), as well as tools such as fail2ban or rsync. I regularly practise with Nmap, Metasploit, Burp Suite, Hydra or Gobuster on enumeration and exploitation labs. I also have experience in scripting to automate tasks or analyse data, and I adapt easily to new tools depending on what the field requires.',
        'My year as a family caregiver taught me rigor, autonomy and responsibility; ten years of competitive gymnastics, discipline and perseverance.',
        'I would be glad to put these skills to work on your missions and to discuss them in an interview.'
      ],
      closing:   'Kind regards,',
      signature: 'Karine Queiros'
    },

    help: [
      '# help',
      'about      who am I',
      'skills     skills',
      'exp        experience',
      'formation  education, certification, languages',
      'letter     cover letter',
      'contact    how to reach me',
      'lang       switch language (FR/EN)',
      'clear      clear screen'
    ],

    ui: { hint: 'Type "help" or click a command above.', unknown: 'unknown command: ', cv: 'Download CV (PDF)' }
  }
};