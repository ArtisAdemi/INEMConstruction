import zeazini3 from '../assets/demurs.jpg';
import renovation from '../assets/renovation.jpg';
import terace from '../assets/terace.jpeg';
import exterier from '../assets/exterier.jpeg';
import facades from '../assets/fasada.jpg';
import fountation from '../assets/twoworkers.jpg';
import { WhatWeDo1, WhatWeDo2, WhatWeDo3, WhatWeDo4, WhatWeDo5, WhatWeDo6 } from './decorations';

export const services = [
    {
        id: 1,
        title: "Construction de murs",
        slug: "construction-de-murs",
        shortDescription: "Murs porteurs, murs extérieurs et intérieurs en brique, parpaing ou pierre.",
        description: {
            info: [
                {
                    title: "Types de murs",
                    detailedInfo: [
                        "Mur porteur : Un mur qui supporte la structure (planchers, toitures) en plus de son propre poids.",
                        "Mur de refend : Un mur intérieur qui sert à diviser l’espace et souvent à renforcer la structure.",
                        "Mur de soutènement : Un mur qui retient la terre ou un autre matériau pour éviter l’érosion.",
                        "Cloison : Mur léger qui sert à séparer les pièces, sans fonction porteuse.",
                        "Mur en parpaing : Mur construit à partir de blocs de béton (parpaings)."
                    ]
                },
                {
                    title: "Matériaux de construction",
                    detailedInfo: [
                        "Parpaing (ou bloc de béton) : Matériau de construction utilisé pour les murs porteurs et non porteurs.",
                        "Brique : Élément de construction en terre cuite utilisé pour les murs.",
                        "Pierre de taille : Pierre naturelle taillée pour les murs.",
                        "Béton armé : Béton renforcé avec des armatures métalliques pour la solidité.",
                        "Mortier : Mélange de ciment, de sable et d’eau utilisé pour lier les briques ou parpaings.",
                        "Enduit : Revêtement appliqué sur le mur pour le protéger ou le décorer.",
                        "Isolant : Matériaux utilisés pour améliorer l’isolation thermique et acoustique des murs (ex. laine de roche, polystyrène expansé)."
                    ]
                },
                {
                    title: "Techniques de construction",
                    detailedInfo: [
                        "Maçonnerie : Technique de construction par assemblage de matériaux (briques, pierres, blocs).",
                        "Coffrage : Structure temporaire utilisée pour contenir le béton jusqu'à ce qu'il durcisse.",
                        "Hourdage : Technique de pose des briques ou des parpaings en superposant les rangées.",
                        "Jointoiement : Application de mortier dans les joints entre les briques ou les pierres.",
                        "Parement : Revêtement extérieur décoratif ou protecteur d’un mur.",
                        "Isolation par l’extérieur (ITE) : Technique d’isolation thermique appliquée sur les murs extérieurs."
                    ]
                }
            ]
        },
        image: zeazini3,
        icon: WhatWeDo1, // Replace with actual icon
        whatYouShouldKnow: "Murs porteurs, murs extérieurs et intérieurs en brique, parpaing ou pierre.",
    },
    {
        id: 2,
        title: "Rénovation et réparation",
        slug: "rénovation-et-réparation",
        shortDescription: "Réfection de murs, rejointoiement, consolidation de structures existantes.",
        description: {
            info: [
                {
                    title: "Types d'interventions en maçonnerie",
                    detailedInfo: [
                        "Réfection : Remise en état d’un élément de maçonnerie existant (mur, façade, sol).",
                        "Restauration : Réhabilitation d’un ouvrage ancien dans le respect de son aspect original.",
                        "Réparation structurelle : Interventions pour renforcer la structure d’un bâtiment (ex. réparation de fissures importantes, consolidation de fondations).",
                        "Ravalement de façade : Nettoyage, réparation et éventuellement pose d’enduit sur une façade pour lui redonner son aspect d’origine.",
                        "Renforcement : Intervention visant à améliorer la résistance structurelle d’un mur ou d’une fondation (ex. par ajout de matériaux).",
                        "Réagréage : Nivellement d’un sol pour corriger des imperfections avant la pose d’un revêtement.",
                        "Rejointoiement : Réparation ou renouvellement des joints entre les pierres ou briques d’un mur.",
                        "Piquer les joints : Technique consistant à retirer les anciens joints dégradés avant de les refaire."
                    ]
                },
                {
                    title: "Pathologies des murs",
                    detailedInfo: [
                        "Fissuration : Fente ou craquelure dans la maçonnerie qui peut être causée par le tassement du sol, des mouvements de structure ou l’humidité.",
                        "Efflorescence : Dépôt de sel blanc à la surface des murs, résultant de la migration de l’humidité à travers le matériau.",
                        "Écaillage : Perte des couches superficielles d’un mur en raison du gel, de l’humidité ou d'un matériau défectueux.",
                        "Faïençage : Réseau de fines fissures à la surface d’un enduit ou d’un mortier.",
                        "Spalling (ou éclatement) : Désagrégation de la surface du béton ou de la maçonnerie due à une mauvaise réaction chimique ou à des contraintes mécaniques."
                    ]
                },
                {
                    title: "Techniques de rénovation et de réparation",
                    detailedInfo: [
                        "Injection de résine : Technique utilisée pour réparer des fissures dans les murs ou les fondations en injectant une résine pour sceller et renforcer.",
                        "Coulis de ciment : Solution liquide de ciment utilisée pour combler des fissures ou renforcer les fondations.",
                        "Micro-fissurage : Traitement des petites fissures superficielles avant qu’elles ne s’aggravent, souvent avec un produit d’étanchéité.",
                        "Sablage : Technique de nettoyage des surfaces maçonnées par projection de sable à haute pression.",
                        "Hydrofugation : Application d’un traitement imperméabilisant pour protéger les murs de l’humidité.",
                        "Réparation par agrafes : Technique de consolidation d’un mur fissuré en y insérant des agrafes métalliques pour en restaurer la stabilité.",
                        "Scellement chimique : Utilisation de résines ou autres produits chimiques pour ancrer des éléments dans la maçonnerie, souvent pour réparer ou renforcer."
                    ]
                }
            ]
        },
        image: renovation,
        icon: WhatWeDo2, // Replace with actual icon
        whatYouShouldKnow: "Réfection de murs, rejointoiement, consolidation de structures existantes.",
    },
    {
        id: 3,
        title: "Terrasses et dallages",
        slug: "terrasses-et-dallages",
        shortDescription: "Création de terrasses en béton, pose de dalles et pavés pour espaces extérieurs.",
        description: {
            info: [
                {
                    title: "Types de terrasses et dallages",
                    detailedInfo: [
                        "Terrasse sur plot : Terrasse construite sur des supports réglables (plots), idéale pour éviter des travaux de terrassement importants.",
                        "Terrasse sur dalle béton : Terrasse construite directement sur une dalle de béton coulée, offrant une base solide et durable.",
                        "Dallage extérieur : Pose de dalles ou pavés sur une base solide, souvent utilisée pour les allées, patios ou zones de stationnement.",
                        "Terrasse en bois : Terrasse construite avec des lames de bois ou composite, offrant un aspect naturel.",
                        "Terrasse carrelée : Terrasse recouverte de carreaux en céramique, grès ou autres matériaux résistants aux intempéries."
                    ]
                },
                {
                    title: "Matériaux pour terrasses et dallages",
                    detailedInfo: [
                        "Pierre naturelle : Utilisation de matériaux comme le granit, le marbre, le calcaire ou l'ardoise pour les terrasses et les dallages, offrant un aspect esthétique et une grande durabilité.",
                        "Béton désactivé : Béton où les granulats sont exposés à la surface, donnant un aspect rugueux et antidérapant, souvent utilisé pour les allées ou terrasses.",
                        "Dalles en grès cérame : Matériau très résistant aux intempéries et facile à entretenir, idéal pour les terrasses extérieures.",
                        "Pavé autobloquant : Pavé en béton ou pierre naturelle qui s’emboîte facilement, très utilisé pour les allées et terrasses.",
                        "Béton imprimé : Béton décoratif dans lequel des motifs sont imprimés pour imiter des matériaux comme la pierre, le bois ou les briques.",
                        "Composite : Matériau à base de fibres de bois et de résines synthétiques, souvent utilisé pour les terrasses en raison de sa durabilité et de sa faible maintenance."
                    ]
                },
                {
                    title: "Techniques de construction",
                    detailedInfo: [
                        "Dalle flottante : Technique où les dalles sont posées sans être scellées, reposant sur un lit de sable ou de gravier, facilitant le drainage et évitant les fissures.",
                        "Pose scellée : Technique où les dalles ou carreaux sont fixés avec du mortier sur une chape en béton, offrant une très bonne stabilité.",
                        "Pose sur sable : Installation de pavés ou de dalles directement sur un lit de sable, sans mortier, permettant un bon drainage.",
                        "Jointoiement : Remplissage des joints entre les dalles ou pavés, soit avec du sable, du mortier ou des résines spécifiques pour assurer la cohésion et l’étanchéité.",
                        "Nivellement : Action de rendre une surface plane avant la pose des dalles ou pavés, souvent avec une règle de maçon et un niveau à bulle.",
                        "Terrassement : Travail de préparation du sol (excavation, nivellement) avant la construction d’une terrasse ou la pose d’un dallage."
                    ]
                },
                {
                    title: "Caractéristiques et finitions",
                    detailedInfo: [
                        "Anti-dérapant : Propriété d’un revêtement (dalles, pavés, bois) de résister aux glissements, particulièrement important pour les terrasses extérieures.",
                        "Drainage : Technique pour faciliter l’évacuation des eaux de pluie sous une terrasse ou un dallage, souvent réalisée avec des drains ou des couches perméables.",
                        "Imperméabilisation : Traitement appliqué à des matériaux (carrelage, bois, béton) pour empêcher l’infiltration d’eau et prolonger la durée de vie de la terrasse ou du dallage.",
                        "Hydrofugation : Application d’un produit sur des dalles ou pavés pour les rendre résistants à l’eau et réduire l’apparition de taches ou de mousses.",
                        "Dilatation thermique : Capacité d’un matériau (bois, béton, carrelage) à se dilater ou se contracter avec les variations de température, à prendre en compte lors de la pose."
                    ]
                }
            ]
        },
        image: terace,
        icon: WhatWeDo3, // Replace with actual icon
        whatYouShouldKnow: "Création de terrasses en béton, pose de dalles et pavés pour espaces extérieurs.",
    },
    {
        id: 4,
        title: "Fondations",
        slug: "fondations",
        shortDescription: "Mise en œuvre de fondations solides pour vos projets de construction.",
        description: {
            info: [
                {
                    title: "Types de fondations",
                    detailedInfo: [
                        "Fondation superficielle : Fondation réalisée à faible profondeur, généralement utilisée pour les bâtiments légers (maisons individuelles, petits bâtiments).",
                        "Fondation profonde : Fondation installée à une grande profondeur pour supporter des charges lourdes, souvent utilisée pour les grands bâtiments, les ponts, etc. (ex. pieux, puits).",
                        "Fondation semi-profonde : Entre les fondations superficielles et profondes, elle est utilisée lorsque le sol de surface est instable mais ne nécessite pas des pieux.",
                        "Fondation en radier : Fondation en forme de dalle épaisse couvrant toute la surface de la construction, utilisée sur des sols faibles pour répartir les charges sur une grande surface",
                        "Fondation sur pieux : Fondation profonde utilisant des pieux (éléments en béton, métal ou bois) enfoncés dans le sol pour transférer la charge à des couches profondes plus stables.",
                        "Semelle filante : Fondation superficielle continue sous un mur porteur ou une rangée de poteaux, qui répartit les charges linéaires.",
                        "Semelle isolée : Fondation isolée sous un poteau ou un pilier pour répartir les charges ponctuelles.",
                        "Semelle de fondation : Partie élargie d'une fondation qui permet de répartir la charge du bâtiment sur une plus grande surface de sol.",
                    ]
                },
                {
                    title: "Matériaux pour les fondations",
                    detailedInfo: [
                        "Béton armé : Béton renforcé avec des armatures en acier, utilisé pour augmenter la résistance et la stabilité des fondations.",
                        "Gravier compacté : Couche de granulats placée sous la fondation pour améliorer la stabilité et le drainage.",
                        "Ciment : Matériau liant utilisé pour former le béton ou le mortier, essentiel dans la réalisation des fondations.",
                        "Armatures : Barres d'acier placées dans le béton pour renforcer la résistance à la traction des fondations.",
                        "Béton hydrofuge : Béton spécialement conçu pour résister à l’eau, utilisé pour les fondations exposées à l’humidité ou en zones inondables.",
                        "Géotextile : Tissu technique utilisé sous les fondations pour séparer le sol du gravier et éviter la remontée des particules fines."
                    ]
                },
                {
                    title: "Techniques de construction de fondations",
                    detailedInfo: [
                        "Coffrage : Structure temporaire utilisée pour contenir et donner forme au béton jusqu'à ce qu'il durcisse dans la fondation.",
                        "Terrassement : Ensemble des travaux d'excavation et de préparation du sol avant la mise en œuvre des fondations.",
                        "Compactage : Action de tasser le sol ou les matériaux (gravier, sable) pour augmenter leur densité et assurer une meilleure stabilité des fondations.",
                        "Coulage du béton : Processus de verser du béton liquide dans les coffrages pour former les fondations.",
                        "Ancrage : Fixation des éléments de construction dans les fondations (ex. tiges d’ancrage pour relier les murs ou les poteaux aux fondations).",
                        "Drainage : Système installé autour des fondations pour évacuer l'eau et protéger contre l'humidité (ex. drain périphérique, drain agricole).",
                        "Injection de coulis : Technique consistant à injecter un coulis de ciment sous pression pour stabiliser le sol sous une fondation existante ou remplir des vides.",
                    ]
                },
                {
                    title: "Études et diagnostics",
                    detailedInfo: [
                        "Étude de sol (géotechnique) : Analyse préalable du terrain pour déterminer la nature du sol et choisir le type de fondation le plus adapté",
                        "Essai pénétrométrique : Test réalisé pour mesurer la résistance du sol à la pénétration, utilisé pour évaluer la portance du sol.",
                        "Portance du sol : Capacité d’un sol à supporter la charge d’un bâtiment sans se déformer ou s'affaisser.",
                        "Subsidence : Affaissement progressif du sol qui peut affecter les fondations et provoquer des fissures dans la structure du bâtiment.",
                        "Tassement différentiel : Déformation irrégulière des fondations dues à des variations dans le comportement du sol, entraînant des fissures dans la structure.",
                    ]
                }
            ]
        },
        image: fountation,
        icon: WhatWeDo4, // Replace with actual icon
        whatYouShouldKnow: "Mise en œuvre de fondations solides pour vos projets de construction.",
    },
    {
        id: 5,
        title: "Aménagements extérieurs",
        slug: "aménagements-extérieurs",
        shortDescription: "Murets, clôtures en maçonnerie, création de piscines.",
        description: {
            info: [
                {
                    title: "Types de murets",
                    detailedInfo: [
                        "Muret de soutènement : Mur en maçonnerie destiné à retenir des terres en cas de dénivelé. Utilisé pour stabiliser le terrain dans les jardins en pente ou pour créer des terrasses.",
                        "Muret de séparation : Petit mur utilisé pour délimiter les espaces dans un jardin ou autour d'une propriété.",
                        "Muret décoratif : Muret basse hauteur, souvent ornemental, qui structure l'espace sans objectif de retenue de terre.",
                    ]
                },
                {
                    title: "Techniques de construction de murets",
                    detailedInfo: [
                        "Coulage de fondations : Étape nécessaire pour créer une base solide sous le muret, afin d’éviter tout affaissement ou fissure.",
                        "Montage à sec : Technique de construction de murets en pierre où les pierres sont empilées sans mortier.",
                        "Maçonnerie traditionnelle : Assemblage de pierres ou de briques avec du mortier pour solidifier le muret.",
                        "Jointoiement : Application de mortier entre les blocs de pierre ou les briques pour stabiliser le muret et améliorer son esthétique.",
                        "Chape de finition : Dernière couche de mortier ou béton appliquée sur le dessus du muret pour une finition lisse.",
                    ]
                },
                {
                    title: "Types de piscines",
                    detailedInfo: [
                        "Piscine enterrée : Bassin creusé dans le sol, construit en béton, en coque polyester ou en panneaux modulaires.",
                        "Piscine en béton armé : Piscine sur mesure avec structure en béton coulé, particulièrement robuste et durable.",
                        "Piscine à débordement : Piscine où l’eau s’écoule par un ou plusieurs côtés, offrant un effet visuel d’infini.",
                        "Piscine à skimmer : Piscine avec des skimmers qui collectent l'eau de surface pour la filtrer, moins coûteuse que la piscine à débordement.",
                        "Piscine miroir : Variante de la piscine à débordement où l’eau est au même niveau que les margelles, créant un effet de miroir."
                    ]
                },
                {
                    title: "Techniques de construction de piscines",
                    detailedInfo: [
                        "Coulage de la dalle de fondation : Première étape dans la construction de la piscine en béton, consistant à créer une base solide.",
                        "Pose des armatures : Installation de treillis ou de barres d’acier dans la structure en béton pour renforcer la résistance à la pression de l’eau.",
                        "Étanchéité des parois : Application d'un revêtement étanche (ex. membrane, enduit) pour éviter les fuites d’eau.",
                        "Installation de skimmers : Pose des éléments pour la filtration de l’eau, intégrés dans les parois de la piscine.",
                        "Plage de piscine : Zone aménagée autour du bassin, souvent réalisée en dalles de béton, bois, ou pierre pour un espace détente."
                    ]
                }
            ]
        },
        image: exterier,
        icon: WhatWeDo5, // Replace with actual icon
        whatYouShouldKnow: "Murets, clôtures en maçonnerie, création de piscines.",
    },
    {
        id: 6,
        title: "Ravalement de façades",
        slug: "ravalement-de-façades",
        shortDescription: "Nettoyage, rénovation et embellissement de façades pour redonner du charme à votre maison.",
        description: {
            info: [
                {
                    title: "Types de façades",
                    detailedInfo: [
                        "Façade ventilée : Système de façade composé de plusieurs couches, avec un espace d'air entre l'isolant et le revêtement extérieur pour favoriser la ventilation et réguler la température..",
                        "Façade enduite : Façade recouverte d’un enduit (mortier de ciment, chaux, plâtre) pour protéger le bâtiment et lui donner une finition esthétique.",
                        "Façade en bardage : Revêtement extérieur en bois, métal, PVC ou composite, posé sur une ossature, souvent utilisé pour ses propriétés esthétiques et isolantes.",
                        "Façade en pierre naturelle : Revêtement en pierres naturelles, comme le granit ou le calcaire, pour un aspect traditionnel et élégant.",
                        "Mur-rideau : Façade légère, souvent en verre et aluminium, qui n'est pas porteuse et est fixée à la structure du bâtiment."
                    ]
                },
                {
                    title: "Matériaux pour façades",
                    detailedInfo: [
                        "Enduit de façade : Mélange de liants (chaux, ciment) et d'agrégats appliqué sur la façade pour la protéger des intempéries et la décorer. Il peut être lisse, gratté, projeté ou taloché.",
                        "Parement en brique : Finition de façade utilisant des briques apparentes, généralement pour donner un aspect classique ou rustique.",
                        "Bardage en bois : Revêtement extérieur en lames de bois naturel ou traité, utilisé pour ses propriétés esthétiques et thermiques.",
                        "Béton matricé : Béton décoratif utilisé pour les façades, avec des motifs imitant la pierre, le bois ou d’autres matériaux.",
                        "Composite : Matériaux modernes utilisés pour le bardage, souvent un mélange de bois et de résines synthétiques, offrant une grande résistance et un entretien minimal.",
                        "Pierre reconstituée : Matériau fabriqué à base de granulats et de liants, utilisé pour imiter l’aspect de la pierre naturelle à moindre coût."
                    ]
                },
            ]
        },
        image: facades,
        icon: WhatWeDo6, // Replace with actual icon
        whatYouShouldKnow: "Nettoyage, rénovation et embellissement de façades pour redonner du charme à votre maison.",
    },
];
