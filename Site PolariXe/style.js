// ==========================================
// 1. TRADUCTIONS (9 LANGUES)
// ==========================================
const translations = {
    fr: {
        lang_panel_title: "Choisissez votre langue",
        nav_mission: "Notre Mission", nav_services: "Nos Services", nav_contact: "Contact", nav_faq: "FAQ",
        hero_tagline: "Agence de Communication Digitale",
        hero_slogan: "« Votre image mérite de rayonner. Nous la faisons grandir. »",
        hero_btn: "Découvrir nos services", hero_btn2: "Nous contacter",
        stat1: "Clients accompagnés", stat2: "Publications créées", stat3: "Établissements scolaires", stat4: "% de satisfaction",
        mission_title: "Notre Mission",
        mission_text1: "Permettre à nos clients de construire une présence digitale professionnelle, cohérente, attractive et orientée vers des résultats concrets, sans devoir mobiliser eux-mêmes du temps ou des compétences spécialisées.",
        mission_text2: "Nous croyons en une communication de proximité, adaptée aux réalités du marché camerounais, alliant créativité et performance.",
        vision_title: "Notre Vision",
        vision_text: "Faire de PolariXe une agence de référence à Yaoundé dans l'accompagnement digital des structures locales, en combinant proximité, créativité, régularité et compréhension des réalités du marché.",
        val1: "Proximité", val2: "Professionnalisme", val3: "Créativité", val4: "Performance", val5: "Progressivité",
        services_title: "Nos Services",
        services_subtitle: "Des solutions complètes pour propulser votre image et atteindre vos objectifs.",
        srv1_title: "Gestion des réseaux sociaux", srv1_text: "Animation de vos communautés sur Instagram, Facebook et TikTok. Réponses aux messages, veille concurrentielle et reporting mensuel.",
        srv2_title: "Création de contenu", srv2_text: "Conception graphique, rédaction de textes percutants et élaboration de calendriers éditoriaux adaptés à votre identité de marque.",
        srv3_title: "Photo & Vidéo", srv3_text: "Couverture professionnelle de vos événements, shootings corporate et montage vidéo pour dynamiser votre communication visuelle.",
        srv4_title: "Publicité digitale", srv4_text: "Gestion de campagnes publicitaires ciblées sur les réseaux sociaux pour augmenter votre visibilité et attirer des prospects qualifiés.",
        srv5_title: "Communication institutionnelle", srv5_text: "Accompagnement des établissements scolaires et structures pour valoriser leurs activités et faciliter l'information auprès des parents.",
        faq_title: "Questions fréquentes", faq_subtitle: "Tout ce que vous devez savoir avant de collaborer avec nous.",
        faq_q1: "Combien de temps avant de voir des résultats concrets ?",
        faq_a1: "Les premiers effets sur la visibilité apparaissent généralement dès le premier mois. Les résultats significatifs se mesurent sur 3 à 6 mois, selon la régularité et les objectifs.",
        faq_q2: "Travaillez-vous avec des budgets serrés ou des petites structures ?",
        faq_a2: "Oui, absolument. Nous adaptons nos prestations à la taille et au budget de chaque structure. Nous proposons des formules progressives.",
        faq_q3: "Comment se passe la collaboration à distance ?",
        faq_a3: "Nous travaillons principalement via WhatsApp, email et Google Drive. Un interlocuteur unique est dédié à chaque client.",
        faq_q4: "Proposez-vous des offres spéciales pour les écoles ?",
        faq_a4: "Oui. Nous avons un Pack Établissement conçu spécialement pour les collèges et lycées, avec un tarif adapté et un accompagnement sur le calendrier scolaire.",
        faq_q5: "Qui rédige les textes et crée les visuels ?",
        faq_a5: "Tout est fait par notre équipe : rédaction, conception graphique, photographie et montage vidéo.",
        faq_q6: "Puis-je arrêter quand je veux ?",
        faq_a6: "Oui. Nos formules mensuelles sont sans engagement de longue durée. Vous pouvez arrêter à la fin de n'importe quel mois, avec un préavis de 15 jours.",
        contact_title: "Parlons de votre projet",
        contact_subtitle: "Choisissez le canal qui vous convient le mieux. Nous répondons généralement en moins de 2 heures.",
        contact_whatsapp_desc: "Le moyen le plus rapide de nous joindre",
        contact_email_desc: "Pour les demandes détaillées et les devis",
        contact_location_title: "Localisation",
        contact_location_desc: "Notre base d'opérations",
        footer_desc: "Agence de communication digitale basée à Yaoundé, Cameroun. Nous donnons de la visibilité à votre image.",
        footer_contact: "Contact", footer_location: "Yaoundé, Cameroun", footer_follow: "Suivez-nous", footer_rights: "Tous droits réservés."
    },
    en: {
        lang_panel_title: "Choose your language",
        nav_mission: "Our Mission", nav_services: "Our Services", nav_contact: "Contact", nav_faq: "FAQ",
        hero_tagline: "Digital Communication Agency",
        hero_slogan: "« Your image deserves to shine. We make it grow. »",
        hero_btn: "Discover our services", hero_btn2: "Contact us",
        stat1: "Clients supported", stat2: "Posts created", stat3: "Schools supported", stat4: "% satisfaction",
        mission_title: "Our Mission",
        mission_text1: "Enable our clients to build a professional, consistent, attractive digital presence oriented towards concrete results, without having to mobilize time or specialized skills themselves.",
        mission_text2: "We believe in local communication, adapted to the realities of the Cameroonian market, combining creativity and performance.",
        vision_title: "Our Vision",
        vision_text: "To make PolariXe a reference agency in Yaoundé for the digital support of local structures, combining proximity, creativity, regularity and understanding of market realities.",
        val1: "Proximity", val2: "Professionalism", val3: "Creativity", val4: "Performance", val5: "Progressiveness",
        services_title: "Our Services",
        services_subtitle: "Complete solutions to boost your image and achieve your goals.",
        srv1_title: "Social Media Management", srv1_text: "Animation of your communities on Instagram, Facebook and TikTok. Message responses, competitive intelligence and monthly reporting.",
        srv2_title: "Content Creation", srv2_text: "Graphic design, writing impactful texts and developing editorial calendars adapted to your brand identity.",
        srv3_title: "Photo & Video", srv3_text: "Professional coverage of your events, corporate shoots and video editing to boost your visual communication.",
        srv4_title: "Digital Advertising", srv4_text: "Management of targeted advertising campaigns on social networks to increase your visibility and attract qualified prospects.",
        srv5_title: "Institutional Communication", srv5_text: "Support for schools and structures to promote their activities and facilitate information for parents.",
        faq_title: "Frequently asked questions", faq_subtitle: "Everything you need to know before working with us.",
        faq_q1: "How long before seeing concrete results?",
        faq_a1: "The first effects on visibility usually appear within the first month. Significant results are measured over 3 to 6 months, depending on regularity and objectives.",
        faq_q2: "Do you work with tight budgets or small structures?",
        faq_a2: "Yes, absolutely. We adapt our services to the size and budget of each structure. We offer progressive packages.",
        faq_q3: "How does remote collaboration work?",
        faq_a3: "We work mainly via WhatsApp, email and Google Drive. A single contact person is dedicated to each client.",
        faq_q4: "Do you offer special packages for schools?",
        faq_a4: "Yes. We have a School Package specially designed for middle and high schools, with an adapted rate and support aligned with the school calendar.",
        faq_q5: "Who writes the texts and creates the visuals?",
        faq_a5: "Everything is done by our team: writing, graphic design, photography and video editing.",
        faq_q6: "Can I stop whenever I want?",
        faq_a6: "Yes. Our monthly packages have no long-term commitment. You can stop at the end of any month, with 15 days' notice.",
        contact_title: "Let's talk about your project",
        contact_subtitle: "Choose the channel that suits you best. We usually respond in less than 2 hours.",
        contact_whatsapp_desc: "The fastest way to reach us",
        contact_email_desc: "For detailed requests and quotes",
        contact_location_title: "Location",
        contact_location_desc: "Our base of operations",
        footer_desc: "Digital communication agency based in Yaoundé, Cameroon. We give visibility to your image.",
        footer_contact: "Contact", footer_location: "Yaoundé, Cameroon", footer_follow: "Follow us", footer_rights: "All rights reserved."
    },
    es: {
        lang_panel_title: "Elige tu idioma",
        nav_mission: "Nuestra Misión", nav_services: "Nuestros Servicios", nav_contact: "Contacto", nav_faq: "FAQ",
        hero_tagline: "Agencia de Comunicación Digital",
        hero_slogan: "« Tu imagen merece brillar. La hacemos crecer. »",
        hero_btn: "Descubrir nuestros servicios", hero_btn2: "Contáctanos",
        stat1: "Clientes acompañados", stat2: "Publicaciones creadas", stat3: "Centros escolares", stat4: "% de satisfacción",
        mission_title: "Nuestra Misión",
        mission_text1: "Permitir a nuestros clientes construir una presencia digital profesional, coherente, atractiva y orientada a resultados concretos, sin tener que movilizar ellos mismos tiempo o competencias especializadas.",
        mission_text2: "Creemos en una comunicación de proximidad, adaptada a las realidades del mercado camerunés, combinando creatividad y rendimiento.",
        vision_title: "Nuestra Visión",
        vision_text: "Hacer de PolariXe una agencia de referencia en Yaundé en el acompañamiento digital de las estructuras locales, combinando proximidad, creatividad, regularidad y comprensión del mercado.",
        val1: "Proximidad", val2: "Profesionalismo", val3: "Creatividad", val4: "Rendimiento", val5: "Progresividad",
        services_title: "Nuestros Servicios",
        services_subtitle: "Soluciones completas para impulsar tu imagen y alcanzar tus objetivos.",
        srv1_title: "Gestión de redes sociales", srv1_text: "Animación de tus comunidades en Instagram, Facebook y TikTok. Respuestas a mensajes, vigilancia competitiva e informes mensuales.",
        srv2_title: "Creación de contenido", srv2_text: "Diseño gráfico, redacción de textos impactantes y elaboración de calendarios editoriales adaptados a tu identidad de marca.",
        srv3_title: "Foto y Vídeo", srv3_text: "Cobertura profesional de tus eventos, sesiones corporativas y montaje de vídeo para dinamizar tu comunicación visual.",
        srv4_title: "Publicidad digital", srv4_text: "Gestión de campañas publicitarias dirigidas en redes sociales para aumentar tu visibilidad y atraer clientes potenciales.",
        srv5_title: "Comunicación institucional", srv5_text: "Acompañamiento a centros escolares y estructuras para valorizar sus actividades y facilitar la información a los padres.",
        faq_title: "Preguntas frecuentes", faq_subtitle: "Todo lo que necesitas saber antes de colaborar con nosotros.",
        faq_q1: "¿Cuánto tiempo antes de ver resultados concretos?",
        faq_a1: "Los primeros efectos sobre la visibilidad suelen aparecer desde el primer mes. Los resultados significativos se miden entre 3 y 6 meses.",
        faq_q2: "¿Trabajan con presupuestos ajustados o estructuras pequeñas?",
        faq_a2: "Sí, por supuesto. Adaptamos nuestros servicios al tamaño y presupuesto de cada estructura. Ofrecemos fórmulas progresivas.",
        faq_q3: "¿Cómo funciona la colaboración a distancia?",
        faq_a3: "Trabajamos principalmente por WhatsApp, email y Google Drive. Un interlocutor único está dedicado a cada cliente.",
        faq_q4: "¿Ofrecen ofertas especiales para escuelas?",
        faq_a4: "Sí. Tenemos un Paquete Escuela diseñado especialmente para colegios y liceos, con tarifa adaptada y acompañamiento en el calendario escolar.",
        faq_q5: "¿Quién redacta los textos y crea los visuales?",
        faq_a5: "Todo lo hace nuestro equipo: redacción, diseño gráfico, fotografía y montaje de vídeo.",
        faq_q6: "¿Puedo parar cuando quiera?",
        faq_a6: "Sí. Nuestras fórmulas mensuales no tienen compromiso de larga duración. Puedes parar al final de cualquier mes, con 15 días de aviso.",
        contact_title: "Hablemos de tu proyecto",
        contact_subtitle: "Elige el canal que más te convenga. Solemos responder en menos de 2 horas.",
        contact_whatsapp_desc: "La forma más rápida de contactarnos",
        contact_email_desc: "Para solicitudes detalladas y presupuestos",
        contact_location_title: "Ubicación",
        contact_location_desc: "Nuestra base de operaciones",
        footer_desc: "Agencia de comunicación digital con sede en Yaundé, Camerún. Damos visibilidad a tu imagen.",
        footer_contact: "Contacto", footer_location: "Yaundé, Camerún", footer_follow: "Síguenos", footer_rights: "Todos los derechos reservados."
    },
    pt: {
        lang_panel_title: "Escolha o seu idioma",
        nav_mission: "Nossa Missão", nav_services: "Nossos Serviços", nav_contact: "Contacto", nav_faq: "FAQ",
        hero_tagline: "Agência de Comunicação Digital",
        hero_slogan: "« A sua imagem merece brilhar. Nós fazemo-la crescer. »",
        hero_btn: "Descobrir os nossos serviços", hero_btn2: "Contacte-nos",
        stat1: "Clientes acompanhados", stat2: "Publicações criadas", stat3: "Estabelecimentos escolares", stat4: "% de satisfação",
        mission_title: "Nossa Missão",
        mission_text1: "Permitir aos nossos clientes construir uma presença digital profissional, coerente, atrativa e orientada para resultados concretos, sem terem de mobilizar tempo ou competências especializadas.",
        mission_text2: "Acreditamos numa comunicação de proximidade, adaptada às realidades do mercado camaronês, combinando criatividade e desempenho.",
        vision_title: "Nossa Visão",
        vision_text: "Fazer da PolariXe uma agência de referência em Yaoundé no acompanhamento digital das estruturas locais, combinando proximidade, criatividade, regularidade e compreensão do mercado.",
        val1: "Proximidade", val2: "Profissionalismo", val3: "Criatividade", val4: "Desempenho", val5: "Progressividade",
        services_title: "Nossos Serviços",
        services_subtitle: "Soluções completas para impulsionar a sua imagem e atingir os seus objetivos.",
        srv1_title: "Gestão de redes sociais", srv1_text: "Animação das suas comunidades no Instagram, Facebook e TikTok. Respostas a mensagens, monitorização da concorrência e relatórios mensais.",
        srv2_title: "Criação de conteúdo", srv2_text: "Design gráfico, redação de textos impactantes e elaboração de calendários editoriais adaptados à sua identidade de marca.",
        srv3_title: "Foto e Vídeo", srv3_text: "Cobertura profissional dos seus eventos, sessões corporativas e montagem de vídeo para dinamizar a sua comunicação visual.",
        srv4_title: "Publicidade digital", srv4_text: "Gestão de campanhas publicitárias segmentadas nas redes sociais para aumentar a sua visibilidade e atrair clientes potenciais.",
        srv5_title: "Comunicação institucional", srv5_text: "Acompanhamento de estabelecimentos escolares e estruturas para valorizar as suas atividades e facilitar a informação aos pais.",
        faq_title: "Perguntas frequentes", faq_subtitle: "Tudo o que precisa de saber antes de colaborar connosco.",
        faq_q1: "Quanto tempo antes de ver resultados concretos?",
        faq_a1: "Os primeiros efeitos na visibilidade aparecem geralmente a partir do primeiro mês. Os resultados significativos medem-se entre 3 a 6 meses.",
        faq_q2: "Trabalham com orçamentos apertados ou pequenas estruturas?",
        faq_a2: "Sim, absolutamente. Adaptamos os nossos serviços ao tamanho e orçamento de cada estrutura. Oferecemos fórmulas progressivas.",
        faq_q3: "Como funciona a colaboração à distância?",
        faq_a3: "Trabalhamos principalmente via WhatsApp, email e Google Drive. Um interlocutor único está dedicado a cada cliente.",
        faq_q4: "Oferecem ofertas especiais para escolas?",
        faq_a4: "Sim. Temos um Pacote Escola concebido especialmente para colégios e liceus, com tarifa adaptada e acompanhamento no calendário escolar.",
        faq_q5: "Quem escreve os textos e cria os visuais?",
        faq_a5: "Tudo é feito pela nossa equipa: redação, design gráfico, fotografia e montagem de vídeo.",
        faq_q6: "Posso parar quando quiser?",
        faq_a6: "Sim. As nossas fórmulas mensais não têm compromisso de longa duração. Pode parar no final de qualquer mês, com 15 dias de aviso.",
        contact_title: "Vamos falar do seu projeto",
        contact_subtitle: "Escolha o canal que mais lhe convém. Respondemos geralmente em menos de 2 horas.",
        contact_whatsapp_desc: "A forma mais rápida de nos contactar",
        contact_email_desc: "Para pedidos detalhados e orçamentos",
        contact_location_title: "Localização",
        contact_location_desc: "A nossa base de operações",
        footer_desc: "Agência de comunicação digital sediada em Yaoundé, Camarões. Damos visibilidade à sua imagem.",
        footer_contact: "Contacto", footer_location: "Yaoundé, Camarões", footer_follow: "Siga-nos", footer_rights: "Todos os direitos reservados."
    },
    it: {
        lang_panel_title: "Scegli la tua lingua",
        nav_mission: "La Nostra Missione", nav_services: "I Nostri Servizi", nav_contact: "Contatti", nav_faq: "FAQ",
        hero_tagline: "Agenzia di Comunicazione Digitale",
        hero_slogan: "« La tua immagine merita di brillare. La facciamo crescere. »",
        hero_btn: "Scopri i nostri servizi", hero_btn2: "Contattaci",
        stat1: "Clienti accompagnati", stat2: "Pubblicazioni create", stat3: "Istituti scolastici", stat4: "% di soddisfazione",
        mission_title: "La Nostra Missione",
        mission_text1: "Permettere ai nostri clienti di costruire una presenza digitale professionale, coerente, attraente e orientata a risultati concreti, senza dover mobilitare tempo o competenze specializzate.",
        mission_text2: "Crediamo in una comunicazione di prossimità, adattata alle realtà del mercato camerunese, che unisce creatività e performance.",
        vision_title: "La Nostra Visione",
        vision_text: "Rendere PolariXe un'agenzia di riferimento a Yaoundé nell'accompagnamento digitale delle strutture locali, combinando prossimità, creatività, regolarità e comprensione del mercato.",
        val1: "Prossimità", val2: "Professionalità", val3: "Creatività", val4: "Performance", val5: "Progressività",
        services_title: "I Nostri Servizi",
        services_subtitle: "Soluzioni complete per dare impulso alla tua immagine e raggiungere i tuoi obiettivi.",
        srv1_title: "Gestione dei social network", srv1_text: "Animazione delle tue community su Instagram, Facebook e TikTok. Risposte ai messaggi, monitoraggio della concorrenza e report mensili.",
        srv2_title: "Creazione di contenuti", srv2_text: "Design grafico, scrittura di testi incisivi ed elaborazione di calendari editoriali adattati alla tua identità di marca.",
        srv3_title: "Foto e Video", srv3_text: "Copertura professionale dei tuoi eventi, shooting aziendali e montaggio video per dinamizzare la tua comunicazione visiva.",
        srv4_title: "Pubblicità digitale", srv4_text: "Gestione di campagne pubblicitarie mirate sui social network per aumentare la tua visibilità e attirare clienti potenziali.",
        srv5_title: "Comunicazione istituzionale", srv5_text: "Accompagnamento di istituti scolastici e strutture per valorizzare le loro attività e facilitare l'informazione ai genitori.",
        faq_title: "Domande frequenti", faq_subtitle: "Tutto ciò che devi sapere prima di collaborare con noi.",
        faq_q1: "Quanto tempo prima di vedere risultati concreti?",
        faq_a1: "I primi effetti sulla visibilità appaiono generalmente dal primo mese. I risultati significativi si misurano tra 3 e 6 mesi.",
        faq_q2: "Lavorate con budget limitati o piccole strutture?",
        faq_a2: "Sì, assolutamente. Adattiamo i nostri servizi alle dimensioni e al budget di ogni struttura. Offriamo formule progressive.",
        faq_q3: "Come funziona la collaborazione a distanza?",
        faq_a3: "Lavoriamo principalmente tramite WhatsApp, email e Google Drive. Un unico referente è dedicato a ogni cliente.",
        faq_q4: "Offrite pacchetti speciali per le scuole?",
        faq_a4: "Sì. Abbiamo un Pacchetto Scuola pensato per medie e licei, con tariffa adattata e supporto sul calendario scolastico.",
        faq_q5: "Chi scrive i testi e crea i visual?",
        faq_a5: "Tutto è fatto dal nostro team: scrittura, design grafico, fotografia e montaggio video.",
        faq_q6: "Posso fermarmi quando voglio?",
        faq_a6: "Sì. Le nostre formule mensili non hanno vincoli di lunga durata. Puoi fermarti alla fine di qualsiasi mese, con 15 giorni di preavviso.",
        contact_title: "Parliamo del tuo progetto",
        contact_subtitle: "Scegli il canale che preferisci. Rispondiamo generalmente in meno di 2 ore.",
        contact_whatsapp_desc: "Il modo più rapido per contattarci",
        contact_email_desc: "Per richieste dettagliate e preventivi",
        contact_location_title: "Posizione",
        contact_location_desc: "La nostra base operativa",
        footer_desc: "Agenzia di comunicazione digitale con sede a Yaoundé, Camerun. Diamo visibilità alla tua immagine.",
        footer_contact: "Contatti", footer_location: "Yaoundé, Camerun", footer_follow: "Seguici", footer_rights: "Tutti i diritti riservati."
    },
    de: {
        lang_panel_title: "Wählen Sie Ihre Sprache",
        nav_mission: "Unsere Mission", nav_services: "Unsere Leistungen", nav_contact: "Kontakt", nav_faq: "FAQ",
        hero_tagline: "Agentur für Digitale Kommunikation",
        hero_slogan: "« Ihr Image verdient es zu strahlen. Wir lassen es wachsen. »",
        hero_btn: "Unsere Leistungen entdecken", hero_btn2: "Kontaktieren Sie uns",
        stat1: "Betreute Kunden", stat2: "Erstellte Beiträge", stat3: "Bildungseinrichtungen", stat4: "% Zufriedenheit",
        mission_title: "Unsere Mission",
        mission_text1: "Wir ermöglichen unseren Kunden den Aufbau einer professionellen, kohärenten und attraktiven digitalen Präsenz mit konkreten Ergebnissen, ohne selbst Zeit oder spezialisierte Kompetenzen aufbringen zu müssen.",
        mission_text2: "Wir glauben an eine nahe Kommunikation, angepasst an die Realitäten des kamerunischen Marktes, die Kreativität und Leistung vereint.",
        vision_title: "Unsere Vision",
        vision_text: "PolariXe zu einer Referenzagentur in Yaoundé für die digitale Begleitung lokaler Strukturen zu machen, indem wir Nähe, Kreativität, Regelmäßigkeit und Marktverständnis verbinden.",
        val1: "Nähe", val2: "Professionalität", val3: "Kreativität", val4: "Leistung", val5: "Fortschrittlichkeit",
        services_title: "Unsere Leistungen",
        services_subtitle: "Komplettlösungen, um Ihr Image zu stärken und Ihre Ziele zu erreichen.",
        srv1_title: "Social-Media-Management", srv1_text: "Betreuung Ihrer Communities auf Instagram, Facebook und TikTok. Beantwortung von Nachrichten, Wettbewerbsanalyse und monatliches Reporting.",
        srv2_title: "Content-Erstellung", srv2_text: "Grafikdesign, Verfassen wirkungsvoller Texte und Erstellung redaktioneller Kalender, passend zu Ihrer Markenidentität.",
        srv3_title: "Foto & Video", srv3_text: "Professionelle Begleitung Ihrer Veranstaltungen, Unternehmensshootings und Videobearbeitung zur Stärkung Ihrer visuellen Kommunikation.",
        srv4_title: "Digitale Werbung", srv4_text: "Verwaltung gezielter Werbekampagnen in sozialen Netzwerken, um Ihre Sichtbarkeit zu erhöhen und qualifizierte Interessenten zu gewinnen.",
        srv5_title: "Institutionelle Kommunikation", srv5_text: "Begleitung von Schulen und Einrichtungen zur Aufwertung ihrer Aktivitäten und zur Erleichterung der Information für Eltern.",
        faq_title: "Häufig gestellte Fragen", faq_subtitle: "Alles, was Sie vor einer Zusammenarbeit mit uns wissen müssen.",
        faq_q1: "Wie lange dauert es, bis konkrete Ergebnisse sichtbar sind?",
        faq_a1: "Die ersten Effekte auf die Sichtbarkeit zeigen sich in der Regel bereits im ersten Monat. Bedeutende Ergebnisse werden über 3 bis 6 Monate gemessen.",
        faq_q2: "Arbeiten Sie mit knappen Budgets oder kleinen Strukturen?",
        faq_a2: "Ja, absolut. Wir passen unsere Leistungen an die Größe und das Budget jeder Struktur an. Wir bieten stufenweise Pakete an.",
        faq_q3: "Wie funktioniert die Zusammenarbeit auf Distanz?",
        faq_a3: "Wir arbeiten hauptsächlich über WhatsApp, E-Mail und Google Drive. Jeder Kunde hat einen festen Ansprechpartner.",
        faq_q4: "Bieten Sie Sonderangebote für Schulen an?",
        faq_a4: "Ja. Wir haben ein Schulpaket speziell für Mittel- und Oberschulen entwickelt, mit angepasstem Preis und Begleitung entlang des Schulkalenders.",
        faq_q5: "Wer schreibt die Texte und erstellt die Visuals?",
        faq_a5: "Alles wird von unserem Team erledigt: Text, Grafikdesign, Fotografie und Videobearbeitung.",
        faq_q6: "Kann ich jederzeit aufhören?",
        faq_a6: "Ja. Unsere Monatspakete haben keine langfristige Bindung. Sie können zum Ende jedes Monats mit 15 Tagen Vorankündigung kündigen.",
        contact_title: "Sprechen wir über Ihr Projekt",
        contact_subtitle: "Wählen Sie den Kanal, der Ihnen am besten passt. Wir antworten in der Regel in weniger als 2 Stunden.",
        contact_whatsapp_desc: "Der schnellste Weg, uns zu erreichen",
        contact_email_desc: "Für detaillierte Anfragen und Angebote",
        contact_location_title: "Standort",
        contact_location_desc: "Unser Standort",
        footer_desc: "Agentur für digitale Kommunikation mit Sitz in Yaoundé, Kamerun. Wir verleihen Ihrem Image Sichtbarkeit.",
        footer_contact: "Kontakt", footer_location: "Yaoundé, Kamerun", footer_follow: "Folgen Sie uns", footer_rights: "Alle Rechte vorbehalten."
    },
    zh: {
        lang_panel_title: "选择您的语言",
        nav_mission: "我们的使命", nav_services: "我们的服务", nav_contact: "联系我们", nav_faq: "常见问题",
        hero_tagline: "数字传播机构",
        hero_slogan: "« 您的形象值得闪耀。我们助它成长。 »",
        hero_btn: "探索我们的服务", hero_btn2: "联系我们",
        stat1: "服务客户", stat2: "创作内容", stat3: "合作学校", stat4: "% 满意度",
        mission_title: "我们的使命",
        mission_text1: "帮助客户建立专业、连贯、有吸引力的数字形象，以取得切实成果，无需自己投入时间或专业技能。",
        mission_text2: "我们相信贴近本地市场的传播方式，融合创意与绩效，适应喀麦隆市场的实际情况。",
        vision_title: "我们的愿景",
        vision_text: "让 PolariXe 成为雅温得数字传播领域的标杆机构，结合贴近性、创造力、规律性与对市场的深刻理解。",
        val1: "贴近", val2: "专业", val3: "创意", val4: "绩效", val5: "进步",
        services_title: "我们的服务",
        services_subtitle: "为提升您的形象、实现您的目标提供全方位解决方案。",
        srv1_title: "社交媒体管理", srv1_text: "在 Instagram、Facebook 和 TikTok 上运营您的社群。回复消息、竞品分析及月度报告。",
        srv2_title: "内容创作", srv2_text: "平面设计、撰写有力文案，并制定适合您品牌形象的编辑日历。",
        srv3_title: "摄影与视频", srv3_text: "为您的活动提供专业拍摄、企业形象拍摄及视频剪辑，为视觉传播注入活力。",
        srv4_title: "数字广告", srv4_text: "在社交网络上投放定向广告活动，提升知名度并吸引优质潜在客户。",
        srv5_title: "机构传播", srv5_text: "为学校和机构提供支持，展示其活动并方便家长获取信息。",
        faq_title: "常见问题", faq_subtitle: "在合作之前您需要了解的一切。",
        faq_q1: "多久能看到实际效果？",
        faq_a1: "可见度方面的初步效果通常在第一个月内出现。显著成果需 3 至 6 个月来衡量。",
        faq_q2: "您们与预算有限或小型机构合作吗？",
        faq_a2: "当然。我们根据每个机构的规模与预算调整服务，并提供渐进式方案。",
        faq_q3: "远程合作如何进行？",
        faq_a3: "我们主要通过 WhatsApp、电子邮件和 Google Drive 协作。每位客户都有专属对接人。",
        faq_q4: "您们为学校提供特别优惠吗？",
        faq_a4: "是的。我们为初高中设计了专属学校套餐，价格优惠并配合校历提供支持。",
        faq_q5: "文案与视觉由谁完成？",
        faq_a5: "全部由我们团队完成：文案撰写、平面设计、摄影与视频剪辑。",
        faq_q6: "我可以随时停止吗？",
        faq_a6: "可以。我们的月度方案没有长期约束。您可在任何月底提前 15 天通知停止。",
        contact_title: "谈谈您的项目",
        contact_subtitle: "选择最适合您的联系方式。我们通常在 2 小时内回复。",
        contact_whatsapp_desc: "最快联系我们的方式",
        contact_email_desc: "适用于详细请求与报价",
        contact_location_title: "位置",
        contact_location_desc: "我们的运营基地",
        footer_desc: "位于喀麦隆雅温得的数字传播机构。为您的形象赋予可见度。",
        footer_contact: "联系", footer_location: "雅温得，喀麦隆", footer_follow: "关注我们", footer_rights: "版权所有。"
    },
    ja: {
        lang_panel_title: "言語を選択",
        nav_mission: "私たちの使命", nav_services: "サービス", nav_contact: "お問い合わせ", nav_faq: "FAQ",
        hero_tagline: "デジタルコミュニケーションエージェンシー",
        hero_slogan: "« あなたのイメージは輝く価値があります。私たちが育てます。 »",
        hero_btn: "サービスを見る", hero_btn2: "お問い合わせ",
        stat1: "支援したクライアント", stat2: "制作した投稿", stat3: "提携校", stat4: "% 満足度",
        mission_title: "私たちの使命",
        mission_text1: "お客様自身が時間や専門スキルを割くことなく、プロフェッショナルで一貫性のある魅力的なデジタルプレゼンスを構築し、具体的な成果につなげることを可能にします。",
        mission_text2: "カメルーン市場の実情に合わせた身近なコミュニケーションを大切にし、創造性と成果を両立します。",
        vision_title: "私たちのビジョン",
        vision_text: "ヤウンデにおけるローカル組織のデジタル支援の基準となるエージェンシーを目指し、身近さ、創造性、継続性、市場理解を組み合わせます。",
        val1: "身近さ", val2: "プロ意識", val3: "創造性", val4: "成果", val5: "漸進性",
        services_title: "サービス",
        services_subtitle: "あなたのイメージを加速させ、目標を達成するための総合ソリューション。",
        srv1_title: "SNS運用", srv1_text: "Instagram、Facebook、TikTokでのコミュニティ運営。メッセージ対応、競合調査、月次レポート。",
        srv2_title: "コンテンツ制作", srv2_text: "グラフィックデザイン、力強いコピーライティング、ブランドに合わせた編集カレンダーの作成。",
        srv3_title: "写真・動画", srv3_text: "イベントのプロ撮影、コーポレート撮影、動画編集でビジュアルコミュニケーションを強化。",
        srv4_title: "デジタル広告", srv4_text: "SNSでのターゲット広告を運用し、認知度を高め、質の高い見込み客を獲得。",
        srv5_title: "組織コミュニケーション", srv5_text: "学校や組織を支援し、活動を発信し、保護者への情報伝達を円滑にします。",
        faq_title: "よくある質問", faq_subtitle: "ご協力の前に知っておくべきこと。",
        faq_q1: "具体的な成果までどのくらいかかりますか？",
        faq_a1: "可視性への効果は通常1か月以内に現れます。顕著な成果は3〜6か月で測定されます。",
        faq_q2: "予算が限られている小規模組織でも対応可能ですか？",
        faq_a2: "もちろんです。各組織の規模と予算に合わせてサービスを調整し、段階的なプランをご用意しています。",
        faq_q3: "遠隔での協業はどのように進めますか？",
        faq_a3: "主にWhatsApp、メール、Google Driveで進めます。各クライアントに専任担当者がつきます。",
        faq_q4: "学校向けの特別プランはありますか？",
        faq_a4: "はい。中学校・高校向けの特別な学校パッケージをご用意しており、学校カレンダーに合わせたサポートを行います。",
        faq_q5: "テキストとビジュアルは誰が作りますか？",
        faq_a5: "すべて当チームが担当します：コピーライティング、グラフィックデザイン、写真、動画編集。",
        faq_q6: "いつでも停止できますか？",
        faq_a6: "はい。月次プランに長期契約はありません。15日前の通知でいつでも停止可能です。",
        contact_title: "あなたのプロジェクトについて話しましょう",
        contact_subtitle: "ご都合の良い連絡手段をお選びください。通常2時間以内に返信します。",
        contact_whatsapp_desc: "最も迅速な連絡方法",
        contact_email_desc: "詳細なご依頼・お見積もりに",
        contact_location_title: "所在地",
        contact_location_desc: "私たちの拠点",
        footer_desc: "カメルーン・ヤウンデを拠点とするデジタルコミュニケーションエージェンシー。あなたのイメージに可視性を。",
        footer_contact: "お問い合わせ", footer_location: "ヤウンデ、カメルーン", footer_follow: "フォローする", footer_rights: "全著作権所有。"
    },
    ar: {
        lang_panel_title: "اختر لغتك",
        nav_mission: "مهمتنا", nav_services: "خدماتنا", nav_contact: "اتصل بنا", nav_faq: "الأسئلة الشائعة",
        hero_tagline: "وكالة الاتصال الرقمي",
        hero_slogan: "« صورتك تستحق أن تلمع. نحن نجعلها تكبر. »",
        hero_btn: "اكتشف خدماتنا", hero_btn2: "اتصل بنا",
        stat1: "عملاء تمت مرافقتهم", stat2: "منشورات تم إنشاؤها", stat3: "مؤسسات تعليمية", stat4: "% رضا",
        mission_title: "مهمتنا",
        mission_text1: "تمكين عملائنا من بناء حضور رقمي احترافي ومتماسك وجذاب وموجه نحو نتائج ملموسة، دون الحاجة إلى تخصيص وقتهم أو مهاراتهم المتخصصة.",
        mission_text2: "نؤمن بالاتصال القريب، المتكيف مع واقع السوق الكاميروني، والجمع بين الإبداع والأداء.",
        vision_title: "رؤيتنا",
        vision_text: "أن نجعل من PolariXe وكالة مرجعية في ياوندي في المرافقة الرقمية للمؤسسات المحلية، من خلال الجمع بين القرب والإبداع والانتظام وفهم السوق.",
        val1: "القرب", val2: "الاحترافية", val3: "الإبداع", val4: "الأداء", val5: "التدرج",
        services_title: "خدماتنا",
        services_subtitle: "حلول شاملة لتعزيز صورتك وتحقيق أهدافك.",
        srv1_title: "إدارة شبكات التواصل الاجتماعي", srv1_text: "تنشيط مجتمعاتك على إنستغرام وفيسبوك وتيك توك. الرد على الرسائل، ومراقبة المنافسة، وتقارير شهرية.",
        srv2_title: "إنشاء المحتوى", srv2_text: "التصميم الجرافيكي، وكتابة نصوص مؤثرة، وإعداد أجندات تحريرية متكيفة مع هوية علامتك التجارية.",
        srv3_title: "الصورة والفيديو", srv3_text: "تغطية احترافية لفعالياتك، وجلسات تصوير مؤسسية، ومونتاج فيديو لتعزيز تواصلك البصري.",
        srv4_title: "الإعلان الرقمي", srv4_text: "إدارة حملات إعلانية موجهة على شبكات التواصل الاجتماعي لزيادة ظهورك وجذب عملاء محتملين.",
        srv5_title: "الاتصال المؤسسي", srv5_text: "مرافقة المؤسسات التعليمية والهيئات لتثمين أنشطتها وتسهيل إيصال المعلومة إلى الأولياء.",
        faq_title: "الأسئلة الشائعة", faq_subtitle: "كل ما تحتاج معرفته قبل التعاون معنا.",
        faq_q1: "كم من الوقت قبل رؤية نتائج ملموسة؟",
        faq_a1: "تظهر الآثار الأولى على الظهور عادة منذ الشهر الأول. أما النتائج الملموسة فتقاس على مدى 3 إلى 6 أشهر.",
        faq_q2: "هل تعملون مع ميزانيات محدودة أو هياكل صغيرة؟",
        faq_a2: "نعم، بالتأكيد. نكيف خدماتنا حسب حجم وميزانية كل هيكل. ونقدم صيغًا تدريجية.",
        faq_q3: "كيف يتم التعاون عن بعد؟",
        faq_a3: "نعمل أساسًا عبر واتساب والبريد الإلكتروني وجوجل درايف. ولكل عميل مسؤول واحد مخصص.",
        faq_q4: "هل تقدمون عروضًا خاصة للمدارس؟",
        faq_a4: "نعم. لدينا حزمة مدرسية مصممة خصيصًا للإعداديات والثانويات، بأسعار مناسبة ومواكبة للتقويم المدرسي.",
        faq_q5: "من يكتب النصوص وينشئ الصور؟",
        faq_a5: "كل شيء يقوم به فريقنا: الكتابة، والتصميم الجرافيكي، والتصوير، ومونتاج الفيديو.",
        faq_q6: "هل يمكنني التوقف متى أردت؟",
        faq_a6: "نعم. صيغنا الشهرية بدون التزام طويل الأمد. يمكنك التوقف في نهاية أي شهر، مع إشعار قبل 15 يومًا.",
        contact_title: "لنتحدث عن مشروعك",
        contact_subtitle: "اختر القناة التي تناسبك. نرد عادة في أقل من ساعتين.",
        contact_whatsapp_desc: "أسرع طريقة للتواصل معنا",
        contact_email_desc: "للطلبات المفصلة والعروض",
        contact_location_title: "الموقع",
        contact_location_desc: "قاعدة عملياتنا",
        footer_desc: "وكالة اتصال رقمي مقرها ياوندي، الكاميرون. نمنح صورتك مزيدًا من الظهور.",
        footer_contact: "اتصل", footer_location: "ياوندي، الكاميرون", footer_follow: "تابعنا", footer_rights: "جميع الحقوق محفوظة."
    }
};

// ==========================================
// 2. GESTION DE LA LANGUE
// ==========================================
const langToggle = document.getElementById('langToggle');
const langPanel = document.getElementById('langPanel');
const langOverlay = document.getElementById('langOverlay');
const langClose = document.getElementById('langClose');
const currentFlag = document.getElementById('currentFlag');
const currentLangCode = document.getElementById('currentLangCode');

const langFlags = {
    fr: '🇫🇷', en: '🇬🇧', es: '🇪🇸', pt: '🇵🇹', it: '🇮🇹',
    de: '🇩🇪', zh: '🇨🇳', ja: '🇯🇵', ar: '🇸🇦'
};
const langCodes = {
    fr: 'FR', en: 'EN', es: 'ES', pt: 'PT', it: 'IT',
    de: 'DE', zh: '中文', ja: '日本語', ar: 'ع'
};

let currentLang = localStorage.getItem("lang") || 'fr';

function updateTypedText() {
    const sloganText = translations[currentLang].hero_slogan;
    const typedEl = document.getElementById('typedText');
    if (!typedEl) return;
    typedEl.textContent = '';
    let i = 0;
    const typing = () => {
        if (i < sloganText.length) {
            typedEl.textContent += sloganText.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    };
    typing();
}

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);

    currentFlag.textContent = langFlags[lang];
    currentLangCode.textContent = langCodes[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    updateTypedText();
}

langToggle.addEventListener('click', () => {
    langPanel.classList.add('active');
    langOverlay.classList.add('active');
});
langClose.addEventListener('click', () => {
    langPanel.classList.remove('active');
    langOverlay.classList.remove('active');
});
langOverlay.addEventListener('click', () => {
    langPanel.classList.remove('active');
    langOverlay.classList.remove('active');
});

document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
        setTimeout(() => {
            langPanel.classList.remove('active');
            langOverlay.classList.remove('active');
        }, 200);
    });
});

applyLanguage(currentLang);

// ==========================================
// 3. THÈME
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const icons = {
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
    sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>'
};

let currentTheme = localStorage.getItem("theme") || "system";
function applyTheme(theme) {
    if (theme === "dark") { document.body.classList.add("dark-mode"); themeIcon.innerHTML = icons.sun; }
    else if (theme === "light") { document.body.classList.remove("dark-mode"); themeIcon.innerHTML = icons.moon; }
    else {
        if (prefersDarkScheme.matches) { document.body.classList.add("dark-mode"); themeIcon.innerHTML = icons.sun; }
        else { document.body.classList.remove("dark-mode"); themeIcon.innerHTML = icons.moon; }
    }
}
applyTheme(currentTheme);
prefersDarkScheme.addEventListener("change", () => { if (currentTheme === "system") applyTheme("system"); });
themeToggle.addEventListener('click', () => {
    if (currentTheme === "light") currentTheme = "dark";
    else if (currentTheme === "dark") currentTheme = "system";
    else currentTheme = "light";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
});

// ==========================================
// 4. ANIMATIONS AU SCROLL + COMPTEURS
// ==========================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            if (entry.target.querySelector('.stat-number')) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-count');
                    let count = 0;
                    const speed = target / 50;
                    const updateCount = () => {
                        if (count < target) {
                            count += Math.ceil(speed);
                            if (count > target) count = target;
                            counter.textContent = count + (target === 100 ? '' : '+');
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.textContent = target + (target === 100 ? '%' : '+');
                        }
                    };
                    updateCount();
                });
            }
        }
    });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ==========================================
// 5. FAQ ACCORDÉON
// ==========================================
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

// ==========================================
// 6. SPARKLES
// ==========================================
if (window.innerWidth > 992) {
    let lastSparkle = 0;
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkle < 60) return;
        lastSparkle = now;
        
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        
        const size = Math.random() * 6 + 4;
        sparkle.style.width = size + 'px';
        sparkle.style.height = size + 'px';
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    });
}

// ==========================================
// 7. HEADER AU SCROLL
// ==========================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

// ==========================================
// 8. BARRE DE PROGRESSION & RETOUR EN HAUT
// ==========================================
const progressBar = document.getElementById('progressBar');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
    if (scrollTop > 500) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});