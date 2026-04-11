import { deviceCatalog, regionCatalog } from "@/lib/market-data";

export const guideCategories = [
  {
    slug: "high-intent",
    label: "High-intent",
    frenchLabel: "Intentions fortes",
    description: "Commercial guides for buyers comparing devices, setup paths, and the fastest route into pricing.",
    frenchDescription: "Guides a forte intention pour aider les visiteurs a choisir un appareil, un parcours et une offre."
  },
  {
    slug: "event-based",
    label: "Event-based",
    frenchLabel: "Moments forts",
    description: "Traffic-spike content built around matches, premium events, and viewing windows that create urgency.",
    frenchDescription: "Contenus lies aux pics de trafic, aux grands matchs et aux moments qui creent une urgence d'achat."
  },
  {
    slug: "comparison",
    label: "Comparison",
    frenchLabel: "Comparatifs",
    description: "Trust-building comparisons that help visitors evaluate IPTV against mainstream alternatives in each market.",
    frenchDescription: "Comparatifs pour renforcer la confiance et aider les visiteurs a situer IPTV face aux alternatives locales."
  },
  {
    slug: "problem-solving",
    label: "Problem-solving",
    frenchLabel: "Problemes frequents",
    description: "Fix-oriented guides for buffering, app issues, and playback problems that often convert quickly.",
    frenchDescription: "Guides axes correction, buffering et depannage pour les requetes a forte conversion."
  }
];

const categoryMap = Object.fromEntries(guideCategories.map((category) => [category.slug, category]));
const frenchRegions = new Set(["fr", "ma", "be"]);
const deviceMap = Object.fromEntries(deviceCatalog.map((device) => [device.slug, device]));

const hi = (config) => ({ kind: "high-intent", ...config });
const event = (config) => ({ kind: "event-based", ...config });
const comparison = (config) => ({ kind: "comparison", ...config });
const problem = (config) => ({ kind: "problem-solving", ...config });

const regionGuideBlueprints = {
  uk: [
    hi({
      slug: "best-iptv-for-firestick-uk",
      title: "Best IPTV for Firestick in the UK",
      keyword: "best IPTV for Firestick UK",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "football-heavy homes that want the quickest setup path before the weekend fixtures",
      supportAngle: "a fast route into pricing once the Firestick path looks credible"
    }),
    hi({
      slug: "iptv-smart-tv-uk",
      title: "IPTV Smart TV setup buyers actually trust in the UK",
      keyword: "IPTV Smart TV UK",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "living-room buyers who want one remote, easy family access, and fewer setup steps",
      supportAngle: "a cleaner handoff from Smart TV research into the UK landing page and pricing"
    }),
    hi({
      slug: "best-iptv-for-android-tv-uk",
      title: "Best IPTV for Android TV in the UK",
      keyword: "best IPTV for Android TV UK",
      deviceSlugs: ["android-tv", "firestick"],
      angle: "buyers who want more control over playback without losing match-day stability",
      supportAngle: "a strong conversion path for power users who compare apps and support before checkout"
    }),
    event({
      slug: "how-to-watch-premier-league-uk",
      title: "How to watch Premier League weekends with IPTV in the UK",
      keyword: "how to watch Premier League UK IPTV",
      eventName: "Premier League weekends",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "the search spike that appears before Saturday kickoff when viewers want stable switching and fast setup"
    }),
    event({
      slug: "watch-champions-league-uk",
      title: "Watch Champions League nights with IPTV in the UK",
      keyword: "watch Champions League UK IPTV",
      eventName: "Champions League nights",
      deviceSlugs: ["android-tv", "firestick"],
      angle: "midweek demand from viewers comparing evening reliability and support responsiveness"
    }),
    comparison({
      slug: "iptv-vs-sky-uk",
      title: "IPTV vs Sky in the UK: what buyers should compare",
      keyword: "IPTV vs Sky UK",
      compareTarget: "Sky",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "households comparing sports access, setup speed, and overall flexibility"
    }),
    comparison({
      slug: "iptv-vs-tnt-sports-uk",
      title: "IPTV vs TNT Sports bundles in the UK",
      keyword: "IPTV vs TNT Sports UK",
      compareTarget: "TNT Sports bundles",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "viewers focused on match nights, switching speed, and fewer platform limits"
    }),
    problem({
      slug: "iptv-buffering-fix-uk",
      title: "IPTV buffering fix for UK homes",
      keyword: "IPTV buffering fix UK",
      problemName: "buffering during evening viewing",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "the moment streams feel unstable around football nights or peak-hour entertainment"
    }),
    problem({
      slug: "iptv-not-working-on-firestick-uk",
      title: "IPTV not working on Firestick in the UK",
      keyword: "IPTV not working Firestick UK",
      problemName: "Firestick playback or login issues",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "buyers who are close to converting but need the app path and support route clarified"
    }),
    problem({
      slug: "best-vpn-for-iptv-uk",
      title: "Best VPN workflow for IPTV in the UK",
      keyword: "best VPN for IPTV UK",
      problemName: "routing decisions when no-VPN performance feels weak",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "buyers who need a clearer way to test routing instead of guessing"
    })
  ],
  fr: [
    hi({
      slug: "meilleur-iptv-firestick-france",
      title: "Meilleur IPTV pour Firestick en France",
      keyword: "meilleur IPTV Firestick France",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "les foyers qui veulent une installation rapide avant les soirees sport et cinema",
      supportAngle: "un passage tres court entre guide Firestick, page France et tarifs"
    }),
    hi({
      slug: "iptv-smart-tv-france",
      title: "IPTV Smart TV en France: le parcours qui convertit le mieux",
      keyword: "IPTV Smart TV France",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les visiteurs qui veulent garder une utilisation salon simple et rassurante",
      supportAngle: "une transition plus propre entre compatibilite Smart TV et prise de commande"
    }),
    hi({
      slug: "meilleur-iptv-android-tv-france",
      title: "Meilleur IPTV pour Android TV en France",
      keyword: "meilleur IPTV Android TV France",
      deviceSlugs: ["android-tv", "firestick"],
      angle: "les utilisateurs qui veulent plus de controle sur le player sans perdre la stabilite",
      supportAngle: "une reponse claire pour les acheteurs qui comparent app, fluidite et support"
    }),
    event({
      slug: "regarder-ligue-1-iptv-france",
      title: "Regarder la Ligue 1 avec IPTV en France",
      keyword: "regarder Ligue 1 IPTV France",
      eventName: "les soirees Ligue 1",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "la recherche qui monte avant les matchs quand le visiteur veut surtout de la fluidite"
    }),
    event({
      slug: "regarder-champions-league-iptv-france",
      title: "Regarder la Champions League avec IPTV en France",
      keyword: "regarder Champions League IPTV France",
      eventName: "les affiches Champions League",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "les requetes de milieu de semaine autour du sport premium et de la qualite d'image"
    }),
    comparison({
      slug: "iptv-vs-canal-plus-france",
      title: "IPTV vs Canal+ en France",
      keyword: "IPTV vs Canal+ France",
      compareTarget: "Canal+",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers qui comparent stabilite, souplesse et confort multi-ecrans"
    }),
    comparison({
      slug: "iptv-vs-netflix-france",
      title: "IPTV vs Netflix en France pour cinema et sport",
      keyword: "IPTV vs Netflix France",
      compareTarget: "Netflix",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les visiteurs qui veulent situer IPTV face a une habitude VOD tres installee"
    }),
    problem({
      slug: "corriger-buffering-iptv-france",
      title: "Corriger le buffering IPTV en France",
      keyword: "corriger buffering IPTV France",
      problemName: "les coupures pendant les pics d'audience",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "la situation ou la promesse produit perd en credibilite si la lecture manque de fluidite"
    }),
    problem({
      slug: "iptv-ne-fonctionne-pas-smart-tv-france",
      title: "IPTV ne fonctionne pas sur Smart TV en France",
      keyword: "IPTV ne fonctionne pas Smart TV France",
      problemName: "les problemes de login, app ou lecture sur Smart TV",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les visiteurs qui veulent une reponse simple avant de demander de l'aide"
    }),
    problem({
      slug: "iptv-freeze-soiree-sport-france",
      title: "IPTV freeze pendant une soiree sport en France",
      keyword: "IPTV freeze soiree sport France",
      problemName: "le freeze pendant les grands matchs ou les pics de trafic",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "les acheteurs qui veulent verifier reseau, player et prochain clic utile sans perdre l'intention d'achat"
    })
  ],
  ma: [
    hi({
      slug: "meilleur-iptv-smart-tv-maroc",
      title: "Meilleur IPTV Smart TV au Maroc",
      keyword: "meilleur IPTV Smart TV Maroc",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers a Casablanca et Rabat qui veulent surtout confirmer la compatibilite salon",
      supportAngle: "un chemin plus court entre confiance locale, appareil et page Maroc"
    }),
    hi({
      slug: "iptv-firestick-maroc",
      title: "IPTV Firestick au Maroc: que verifier avant de commander",
      keyword: "IPTV Firestick Maroc",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "les visiteurs qui veulent un boitier simple avec support joignable rapidement",
      supportAngle: "un passage direct vers le support FR/AR et les tarifs"
    }),
    hi({
      slug: "meilleur-iptv-android-tv-maroc",
      title: "Meilleur IPTV pour Android TV au Maroc",
      keyword: "meilleur IPTV Android TV Maroc",
      deviceSlugs: ["android-tv", "smart-tv"],
      angle: "les utilisateurs qui veulent plus de flexibilite entre salon, mobile et TV box",
      supportAngle: "une orientation plus nette vers les pages appareil et l'offre locale"
    }),
    event({
      slug: "regarder-ligue-des-champions-maroc",
      title: "Regarder la Ligue des champions avec IPTV au Maroc",
      keyword: "regarder Ligue des champions IPTV Maroc",
      eventName: "les grandes soirees Ligue des champions",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les recherches qui explosent avant les matchs quand la fluidite devient decisive"
    }),
    event({
      slug: "watch-ufc-maroc",
      title: "Watch UFC with IPTV in Morocco",
      keyword: "watch UFC Morocco IPTV",
      eventName: "UFC nights in Morocco",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "late-night traffic from viewers who care about fast switching and easy app setup"
    }),
    comparison({
      slug: "iptv-vs-bein-connect-maroc",
      title: "IPTV vs beIN Connect au Maroc",
      keyword: "IPTV vs beIN Connect Maroc",
      compareTarget: "beIN Connect",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les acheteurs qui comparent sport, souplesse multi-ecrans et confort quotidien"
    }),
    comparison({
      slug: "iptv-vs-netflix-maroc",
      title: "IPTV vs Netflix au Maroc",
      keyword: "IPTV vs Netflix Maroc",
      compareTarget: "Netflix",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers qui veulent arbitrer entre VOD, sport et experience famille"
    }),
    problem({
      slug: "corriger-buffering-iptv-maroc",
      title: "Corriger le buffering IPTV au Maroc",
      keyword: "corriger buffering IPTV Maroc",
      problemName: "les coupures sur Smart TV ou box pendant les heures chargees",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les visiteurs qui ont besoin d'une checklist simple avant de parler au support"
    }),
    problem({
      slug: "iptv-ne-marche-pas-smart-tv-maroc",
      title: "IPTV ne marche pas sur Smart TV au Maroc",
      keyword: "IPTV ne marche pas Smart TV Maroc",
      problemName: "les blocages de connexion ou de player sur Smart TV",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les requetes qui melangent depannage, confiance et besoin d'une reponse rapide"
    }),
    problem({
      slug: "wifi-ou-ethernet-iptv-maroc",
      title: "Wi-Fi ou Ethernet pour IPTV au Maroc",
      keyword: "Wi-Fi ou Ethernet IPTV Maroc",
      problemName: "les doutes sur le reseau ideal pour une lecture plus stable",
      deviceSlugs: ["android-tv", "smart-tv"],
      angle: "les foyers qui veulent comprendre ce qui bloque avant d'accuser l'offre"
    })
  ],
  be: [
    hi({
      slug: "iptv-smart-tv-belgique",
      title: "IPTV Smart TV en Belgique",
      keyword: "IPTV Smart TV Belgique",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les foyers francophones qui veulent une experience salon plus claire et stable",
      supportAngle: "une passerelle simple entre compatibilite, page Belgique et pricing"
    }),
    hi({
      slug: "meilleur-iptv-firestick-belgique",
      title: "Meilleur IPTV pour Firestick en Belgique",
      keyword: "meilleur IPTV Firestick Belgique",
      deviceSlugs: ["firestick", "smart-tv"],
      angle: "les visiteurs qui cherchent une activation rapide pour sport et cinema",
      supportAngle: "un parcours plus direct vers l'offre regionale une fois le device valide"
    }),
    hi({
      slug: "meilleur-iptv-android-tv-belgique",
      title: "Meilleur IPTV pour Android TV en Belgique",
      keyword: "meilleur IPTV Android TV Belgique",
      deviceSlugs: ["android-tv", "firestick"],
      angle: "les profils qui veulent plus de controle sans complexifier le salon",
      supportAngle: "une reponse plus credible pour les utilisateurs qui comparent players et support"
    }),
    event({
      slug: "regarder-champions-league-belgique",
      title: "Regarder la Champions League avec IPTV en Belgique",
      keyword: "regarder Champions League IPTV Belgique",
      eventName: "les affiches Champions League",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les requetes de soiree qui demandent un chemin court entre comparaison et conversion"
    }),
    event({
      slug: "regarder-pro-league-iptv-belgique",
      title: "Regarder la Pro League avec IPTV en Belgique",
      keyword: "regarder Pro League IPTV Belgique",
      eventName: "les soirees Pro League",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les recherches locales autour du sport premium et d'une lecture plus stable"
    }),
    comparison({
      slug: "iptv-vs-canal-plus-belgique",
      title: "IPTV vs Canal+ en Belgique",
      keyword: "IPTV vs Canal+ Belgique",
      compareTarget: "Canal+",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les visiteurs qui veulent situer IPTV face a une reference premium francophone"
    }),
    comparison({
      slug: "iptv-vs-netflix-belgique",
      title: "IPTV vs Netflix en Belgique",
      keyword: "IPTV vs Netflix Belgique",
      compareTarget: "Netflix",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les foyers qui veulent mieux comparer usage cinema, sport et multi-ecrans"
    }),
    problem({
      slug: "corriger-buffering-iptv-belgique",
      title: "Corriger le buffering IPTV en Belgique",
      keyword: "corriger buffering IPTV Belgique",
      problemName: "les coupures pendant le sport premium ou les heures chargees",
      deviceSlugs: ["smart-tv", "android-tv"],
      angle: "les utilisateurs qui veulent des actions concretes avant de quitter la page"
    }),
    problem({
      slug: "iptv-ne-fonctionne-pas-smart-tv-belgique",
      title: "IPTV ne fonctionne pas sur Smart TV en Belgique",
      keyword: "IPTV ne fonctionne pas Smart TV Belgique",
      problemName: "les pannes de player, identifiants ou lecture sur Smart TV",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "les requetes de depannage qui convertissent mieux quand la prochaine etape est visible"
    }),
    problem({
      slug: "iptv-coupe-soir-de-match-belgique",
      title: "IPTV coupe un soir de match en Belgique",
      keyword: "IPTV coupe soir de match Belgique",
      problemName: "les interruptions en plein direct",
      deviceSlugs: ["firestick", "android-tv"],
      angle: "les visiteurs qui veulent verifier player, reseau et support sans perdre la confiance"
    })
  ],
  gcc: [
    hi({
      slug: "best-iptv-for-firestick-gcc",
      title: "Best IPTV for Firestick in the GCC",
      keyword: "best IPTV for Firestick GCC",
      deviceSlugs: ["firestick", "apple-tv"],
      angle: "buyers who want a fast living-room setup before premium sports or family viewing",
      supportAngle: "a short route from device research into the GCC pricing flow"
    }),
    hi({
      slug: "best-iptv-for-apple-tv-gcc",
      title: "Best IPTV for Apple TV in the GCC",
      keyword: "best IPTV for Apple TV GCC",
      deviceSlugs: ["apple-tv", "firestick"],
      angle: "premium households that care about interface polish as much as playback quality",
      supportAngle: "a cleaner handoff from premium device research into support and checkout"
    }),
    hi({
      slug: "best-iptv-for-smart-tv-gcc",
      title: "Best IPTV for Smart TV homes in the GCC",
      keyword: "best IPTV for Smart TV GCC",
      deviceSlugs: ["smart-tv", "apple-tv"],
      angle: "buyers who want the main living-room screen to feel simple, premium, and 4K-ready",
      supportAngle: "a better conversion path for viewers comparing polished family setups"
    }),
    event({
      slug: "how-to-watch-premier-league-in-dubai",
      title: "How to watch Premier League nights with IPTV in Dubai",
      keyword: "watch Premier League Dubai IPTV",
      eventName: "Premier League nights in Dubai",
      deviceSlugs: ["apple-tv", "firestick"],
      angle: "the traffic surge from viewers who expect premium playback on big screens"
    }),
    event({
      slug: "watch-ufc-in-gcc",
      title: "Watch UFC with IPTV in the GCC",
      keyword: "watch UFC GCC IPTV",
      eventName: "UFC event nights",
      deviceSlugs: ["firestick", "apple-tv"],
      angle: "late-night buyers who want fast answers on 4K playback and setup quality"
    }),
    comparison({
      slug: "iptv-vs-osn-gcc",
      title: "IPTV vs OSN in the GCC",
      keyword: "IPTV vs OSN GCC",
      compareTarget: "OSN",
      deviceSlugs: ["apple-tv", "smart-tv"],
      angle: "premium households comparing polish, flexibility, and support responsiveness"
    }),
    comparison({
      slug: "iptv-vs-netflix-gcc",
      title: "IPTV vs Netflix in the GCC for sports and family streaming",
      keyword: "IPTV vs Netflix GCC",
      compareTarget: "Netflix",
      deviceSlugs: ["smart-tv", "firestick"],
      angle: "buyers who want to weigh VOD familiarity against live events and wider catalog access"
    }),
    problem({
      slug: "iptv-buffering-fix-dubai",
      title: "IPTV buffering fix for Dubai and GCC homes",
      keyword: "IPTV buffering fix Dubai",
      problemName: "buffering on premium 4K screens during busy hours",
      deviceSlugs: ["apple-tv", "smart-tv"],
      angle: "viewers who expect premium playback and lose trust as soon as the stream feels unstable"
    }),
    problem({
      slug: "iptv-not-working-on-apple-tv-gcc",
      title: "IPTV not working on Apple TV in the GCC",
      keyword: "IPTV not working Apple TV GCC",
      problemName: "Apple TV login or playback issues",
      deviceSlugs: ["apple-tv", "firestick"],
      angle: "buyers who want a polished solution path before they reach out to support"
    }),
    problem({
      slug: "best-vpn-for-iptv-gcc",
      title: "Best VPN workflow for IPTV in the GCC",
      keyword: "best VPN for IPTV GCC",
      problemName: "routing questions when premium playback needs extra tuning",
      deviceSlugs: ["firestick", "apple-tv"],
      angle: "buyers who want a better method for testing routes across Dubai, Doha, and the wider Gulf"
    })
  ]
};

function isFrenchRegion(region) {
  return frenchRegions.has(region.slug);
}

function regionFor(slug) {
  return regionCatalog.find((region) => region.slug === slug);
}

function devicesFor(slugs) {
  return slugs.map((slug) => deviceMap[slug]).filter(Boolean);
}

function categoryLabel(region, categorySlug) {
  const category = categoryMap[categorySlug];
  return isFrenchRegion(region) ? category.frenchLabel : category.label;
}

function categoryDescription(region, categorySlug) {
  const category = categoryMap[categorySlug];
  return isFrenchRegion(region) ? category.frenchDescription : category.description;
}

function deviceSummary(devices) {
  return devices.map((device) => device.name).join(", ");
}

function comparisonDevices(primary, secondary, french) {
  if (!secondary) {
    return french
      ? `${primary.name} reste le point d'entree le plus simple car ${primary.comparison.toLowerCase()}`
      : `${primary.name} is usually the cleanest starting point because ${primary.comparison.toLowerCase()}`;
  }

  return french
    ? `${primary.name} ouvre la voie la plus simple, alors que ${secondary.name} prend le relais quand l'utilisateur veut ${secondary.bestFor.toLowerCase()}.`
    : `${primary.name} is the simplest starting point, while ${secondary.name} becomes stronger when the buyer wants ${secondary.bestFor.toLowerCase()}.`;
}

function buildHighIntentGuide(region, blueprint) {
  const french = isFrenchRegion(region);
  const devices = devicesFor(blueprint.deviceSlugs);
  const [primary, secondary] = devices;
  const provider = region.providerFocus?.[0] ?? region.coverageSummary;
  const pricingHref = `/${region.slug}#pricing`;
  const description = french
    ? `Guide ${region.shortName} pour ${blueprint.keyword}, avec liens vers ${deviceSummary(devices)}, la page ${region.shortName} et la section tarifs.`
    : `${blueprint.title} guide for ${region.name} buyers comparing ${deviceSummary(devices)} with direct links into the ${region.shortName} page and pricing.`;
  const intro = french
    ? `${blueprint.keyword} correspond a une recherche tres proche de la commande. Les visiteurs veulent surtout ${blueprint.angle}. Ce guide montre quels appareils prioriser, quoi verifier autour de ${provider}, et comment passer rapidement vers la page ${region.shortName} puis ${pricingHref}.`
    : `${blueprint.keyword} is a high-intent query because buyers already know the device path they want. They mainly want ${blueprint.angle}. This guide shows which devices to shortlist, what to verify around ${provider} viewing windows, and how to move into the ${region.shortName} page and pricing without extra clicks.`;

  return {
    region: region.slug,
    slug: blueprint.slug,
    title: blueprint.title,
    keyword: blueprint.keyword,
    description,
    intro,
    category: blueprint.kind,
    categoryLabel: categoryLabel(region, blueprint.kind),
    categoryDescription: categoryDescription(region, blueprint.kind),
    deviceSlugs: blueprint.deviceSlugs,
    sections: french
      ? [
          {
            kicker: "Appareils",
            heading: "Commencer par l'appareil qui correspond vraiment au salon",
            body: `En ${region.name}, beaucoup de visiteurs comparent trop vite le volume de chaines et pas assez la facon dont le flux se comporte sur l'ecran principal. ${blueprint.title} devient plus credible quand l'appareil correspond a l'usage reel du foyer.`,
            subsections: [
              {
                heading: `${primary.name} pour aller vite`,
                body: comparisonDevices(primary, secondary, true)
              },
              secondary
                ? {
                    heading: `${secondary.name} pour aller plus loin`,
                    body: `${secondary.comparison} Cela aide les visiteurs qui veulent un peu plus de controle sans casser le parcours de conversion.`
                  }
                : null
            ].filter(Boolean)
          },
          {
            kicker: "Verification",
            heading: "Ce qu'il faut valider avant de payer",
            body: `Les acheteurs les plus qualifies veulent une checklist courte: tester la fluidite, verifier le player prioritaire, puis garder support et tarifs visibles avant l'achat.`,
            bullets: [
              `Comparer la lecture pendant un moment fort autour de ${provider}.`,
              `Verifier que ${region.currencyLabel} et le contexte local restent clairs pour le visiteur.`,
              `Conserver un lien direct vers la page ${region.shortName}, la page appareil et la section tarifs.`
            ]
          },
          {
            kicker: "Conversion",
            heading: "La meilleure suite pour cette recherche",
            body: `${blueprint.supportAngle}. Le bon enchainement reste simple: page regionale, guide appareil, puis tarifs ou support selon le niveau de confiance.`
          }
        ]
      : [
          {
            kicker: "Device fit",
            heading: "Start with the device that matches the room",
            body: `Across ${region.city} and ${region.secondaryCity}, buyers often over-focus on channel count and under-focus on how the stream behaves on the main screen. ${blueprint.title} works better when the device matches the room, the remote habits, and the kind of viewing the household actually does.`,
            subsections: [
              {
                heading: `${primary.name} for the fastest path`,
                body: comparisonDevices(primary, secondary, false)
              },
              secondary
                ? {
                    heading: `${secondary.name} when flexibility matters more`,
                    body: `${secondary.comparison} That makes it useful for buyers who want more control without losing a clear route to conversion.`
                  }
                : null
            ].filter(Boolean)
          },
          {
            kicker: "Validation",
            heading: "What to verify before you pay",
            body: "High-intent device queries convert best when the page reduces uncertainty quickly. The buyer wants a short checklist that confirms playback quality, app direction, and where to go next.",
            bullets: [
              `Test playback during a meaningful ${provider} viewing window.`,
              `Keep ${region.currencyLabel} or local pricing context easy to understand.`,
              `Hold a direct path to the ${region.shortName} landing page, the device page, and pricing.`
            ]
          },
          {
            kicker: "Next step",
            heading: "Move from device research into the regional buying path",
            body: `${blueprint.supportAngle}. The strongest path stays short: regional page, device page, then pricing or support once the device choice feels right.`
          }
        ],
    faqs: french
      ? [
          {
            question: `Quel appareil convient le mieux pour ${blueprint.keyword} ?`,
            answer: `${primary.name} reste souvent le plus simple pour commencer, puis ${secondary?.name ?? primary.name} prend le relais si le visiteur veut plus de marge de reglage.`
          },
          {
            question: "Pourquoi garder la page regionale et les tarifs si proches ?",
            answer: `Parce qu'une recherche a forte intention doit passer tres vite de l'information a la conversion sans perdre le contexte ${region.shortName}.`
          },
          {
            question: "Le support doit-il intervenir avant l'achat ?",
            answer: "Oui, surtout quand le visiteur hesite entre deux appareils ou veut confirmer le meilleur player avant activation."
          }
        ]
      : [
          {
            question: `Which device is the best starting point for ${blueprint.keyword}?`,
            answer: `${primary.name} is usually the simplest first step, with ${secondary?.name ?? primary.name} becoming stronger when the buyer wants more playback control.`
          },
          {
            question: "Why keep the regional page and pricing so close to the article?",
            answer: `Because high-intent research should move into the ${region.shortName} commercial path quickly instead of ending on an informational dead end.`
          },
          {
            question: "Should support step in before checkout?",
            answer: "Yes, especially when the buyer is deciding between two devices or wants the cleanest app recommendation first."
          }
        ]
  };
}

function buildEventGuide(region, blueprint) {
  const french = isFrenchRegion(region);
  const devices = devicesFor(blueprint.deviceSlugs);
  const [primary, secondary] = devices;
  const provider = region.providerFocus?.[1] ?? region.providerFocus?.[0] ?? region.coverageSummary;

  return {
    region: region.slug,
    slug: blueprint.slug,
    title: blueprint.title,
    keyword: blueprint.keyword,
    description: french
      ? `Guide ${region.shortName} pour ${blueprint.eventName}, avec appareil conseille, maillage interne et sortie directe vers tarifs et support.`
      : `${blueprint.title} guide for ${region.name} traffic spikes, including the best device route, internal links, and direct pricing or support access.`,
    intro: french
      ? `${blueprint.eventName} font grimper les recherches parce que le visiteur veut une reponse pratique avant le direct. Cette page organise le trafic autour de l'appareil le plus logique, de la page ${region.shortName} et des tarifs pour garder une intention commerciale visible.`
      : `${blueprint.eventName} create a sharper search spike than generic IPTV queries because buyers want a practical answer before the event starts. This guide channels that traffic into the right device path, the ${region.shortName} page, and pricing so urgency stays connected to conversion.`,
    category: blueprint.kind,
    categoryLabel: categoryLabel(region, blueprint.kind),
    categoryDescription: categoryDescription(region, blueprint.kind),
    deviceSlugs: blueprint.deviceSlugs,
    sections: french
      ? [
          {
            kicker: "Pic de trafic",
            heading: `Pourquoi ${blueprint.eventName} convertissent mieux qu'une requete generique`,
            body: `Le visiteur ne cherche pas seulement une liste de chaines. Il veut surtout savoir si la lecture tiendra pendant ${provider} et quel appareil donnera la reponse la plus propre.`
          },
          {
            kicker: "Parcours appareil",
            heading: "Les appareils a prioriser avant le direct",
            body: `${primary.name} reste le chemin le plus simple pour aller vite, alors que ${secondary?.name ?? primary.name} sert mieux les visiteurs qui veulent plus de marge sur le player ou l'image.`,
            subsections: [
              {
                heading: `${primary.name} pour la rapidite`,
                body: `${primary.comparison} Cela colle bien a un trafic de derniere minute.`
              },
              secondary
                ? {
                    heading: `${secondary.name} pour un usage plus exigeant`,
                    body: `${secondary.comparison} Ce choix aide quand la qualite d'image ou le confort d'usage prend plus de place.`
                  }
                : null
            ].filter(Boolean)
          },
          {
            kicker: "Suite logique",
            heading: "Le bon tunnel apres cette page",
            body: `La meilleure sequence reste: page ${region.shortName}, guide appareil, puis tarifs ou support. Cela garde la recherche evenementielle dans un tunnel court et rentable.`
          }
        ]
      : [
          {
            kicker: "Traffic spike",
            heading: `Why ${blueprint.eventName} convert faster than generic IPTV queries`,
            body: `The searcher is not only looking for channel access. They want to know whether playback will hold up during ${provider} viewing windows and which device route gets them there with the least friction.`
          },
          {
            kicker: "Device route",
            heading: "Which devices to prioritize before the event starts",
            body: `${primary.name} is usually the fastest path for urgent setup, while ${secondary?.name ?? primary.name} suits buyers who care more about tuning, interface comfort, or premium playback polish.`,
            subsections: [
              {
                heading: `${primary.name} for a fast pre-event setup`,
                body: `${primary.comparison} That makes it ideal for traffic that arrives late and wants answers quickly.`
              },
              secondary
                ? {
                    heading: `${secondary.name} for a more premium setup`,
                    body: `${secondary.comparison} It works better when the buyer is comparing picture quality and everyday comfort too.`
                  }
                : null
            ].filter(Boolean)
          },
          {
            kicker: "Conversion path",
            heading: "Where this guide should send buyers next",
            body: `The best sequence is simple: ${region.shortName} landing page, device guide, then pricing or support. That keeps event-driven traffic inside a commercial path instead of leaving it as one-off informational traffic.`
          }
        ],
    faqs: french
      ? [
          {
            question: `Quel appareil choisir pour ${blueprint.eventName} ?`,
            answer: `${primary.name} reste le plus rapide a mettre en place, puis ${secondary?.name ?? primary.name} prend le relais pour un usage plus exigeant.`
          },
          {
            question: "Pourquoi relier ce contenu aux tarifs ?",
            answer: "Parce qu'une recherche evenementielle est souvent tres proche de la commande une fois que le doute sur l'appareil est leve."
          },
          {
            question: "Le guide doit-il renvoyer vers la page regionale ?",
            answer: `Oui, pour garder les signaux locaux, la preuve sociale et la FAQ ${region.shortName} dans le meme tunnel.`
          }
        ]
      : [
          {
            question: `Which device is best for ${blueprint.eventName}?`,
            answer: `${primary.name} is usually the fastest setup path, while ${secondary?.name ?? primary.name} becomes useful for buyers who want more tuning headroom.`
          },
          {
            question: "Why should an event guide link into pricing?",
            answer: "Because event-driven traffic is often close to purchase once the device route feels safe and the support path is visible."
          },
          {
            question: "Should this guide link back to the regional page?",
            answer: `Yes. That keeps local trust signals, FAQs, and pricing inside the same ${region.shortName} funnel.`
          }
        ]
  };
}

function buildComparisonGuide(region, blueprint) {
  const french = isFrenchRegion(region);
  const devices = devicesFor(blueprint.deviceSlugs);
  const [primary, secondary] = devices;
  const provider = region.providerFocus?.[0] ?? region.coverageSummary;

  return {
    region: region.slug,
    slug: blueprint.slug,
    title: blueprint.title,
    keyword: blueprint.keyword,
    description: french
      ? `Comparatif ${region.shortName} entre IPTV et ${blueprint.compareTarget}, avec angles de confiance, appareils lies et sortie vers page locale et tarifs.`
      : `${blueprint.title} comparison for ${region.name}, with local trust angles, linked devices, and a direct route back to the regional page and pricing.`,
    intro: french
      ? `Comparer IPTV a ${blueprint.compareTarget} aide les visiteurs a replacer l'offre dans un cadre qu'ils connaissent deja. Cette page n'a pas pour role de denigrer ${blueprint.compareTarget}, mais de montrer comment un acheteur ${region.shortName} peut comparer souplesse, confort et prochain clic utile.`
      : `Comparing IPTV with ${blueprint.compareTarget} gives buyers a frame of reference they already understand. The goal is not to dismiss ${blueprint.compareTarget}, but to help ${region.shortName} searchers compare flexibility, viewing comfort, and the next step that makes commercial sense.`,
    category: blueprint.kind,
    categoryLabel: categoryLabel(region, blueprint.kind),
    categoryDescription: categoryDescription(region, blueprint.kind),
    deviceSlugs: blueprint.deviceSlugs,
    sections: french
      ? [
          {
            kicker: "Forces",
            heading: `La ou IPTV prend l'avantage face a ${blueprint.compareTarget}`,
            body: `Dans ${region.name}, les visiteurs voient vite la difference quand ils comparent la souplesse des appareils, le volume de contenus, et la possibilite de garder sport, cinema et usage famille dans un meme parcours.`,
            bullets: [
              `Compatibilite plus large autour de ${deviceSummary(devices)}.`,
              `Passage plus direct vers support et activation que dans un tunnel trop ferme.`,
              `Un maillage interne qui relie comparaison, page ${region.shortName} et tarifs.`
            ]
          },
          {
            kicker: "Limites",
            heading: `La ou ${blueprint.compareTarget} peut sembler plus simple`,
            body: `${blueprint.compareTarget} garde parfois un avantage de clarte pour les utilisateurs qui veulent une marque deja connue. La bonne strategie SEO consiste donc a rassurer avec des preuves locales, des guides appareil et un pricing visible.`
          },
          {
            kicker: "Decision",
            heading: "Comment comparer sans perdre l'intention commerciale",
            body: `${primary.name} et ${secondary?.name ?? primary.name} servent ici de ponts techniques. Le visiteur doit pouvoir lire ce comparatif puis aller directement vers la page ${region.shortName}, les guides appareil et les tarifs.`
          }
        ]
      : [
          {
            kicker: "Strengths",
            heading: `Where IPTV wins against ${blueprint.compareTarget}`,
            body: `In ${region.name}, buyers see the difference fastest when they compare device flexibility, catalog breadth, and how easily one setup can cover sports, family viewing, and everyday entertainment.`,
            bullets: [
              `Wider device coverage around ${deviceSummary(devices)}.`,
              "A shorter path into support and activation instead of a closed subscription flow.",
              `Internal links that connect comparison intent to the ${region.shortName} page and pricing.`
            ]
          },
          {
            kicker: "Trade-offs",
            heading: `Where ${blueprint.compareTarget} can still feel simpler`,
            body: `${blueprint.compareTarget} can feel clearer to buyers who are used to a familiar brand. That is why the better SEO play is to respond with local proof, device guides, and a visible pricing path instead of vague claims.`
          },
          {
            kicker: "Decision",
            heading: "How to compare honestly and still move toward action",
            body: `${primary.name} and ${secondary?.name ?? primary.name} act as the technical bridge in this comparison. The reader should be able to finish this guide, then move directly into the ${region.shortName} page, device guides, and pricing.`
          }
        ],
    faqs: french
      ? [
          {
            question: `Pourquoi comparer IPTV a ${blueprint.compareTarget} ?`,
            answer: `Parce que ${blueprint.compareTarget} est deja un repere pour beaucoup de visiteurs ${region.shortName}, et le comparatif rend la decision plus concrete.`
          },
          {
            question: "Ce type de page doit-il pointer vers les appareils ?",
            answer: `Oui, car la comparaison devient plus credible quand elle debouche sur ${primary.name}, ${secondary?.name ?? primary.name} et un chemin technique clair.`
          },
          {
            question: "Ou doit aller le visiteur ensuite ?",
            answer: `Vers la page ${region.shortName}, les guides appareil et la section tarifs, selon son niveau de confiance.`
          }
        ]
      : [
          {
            question: `Why compare IPTV with ${blueprint.compareTarget}?`,
            answer: `${blueprint.compareTarget} is already a known reference for many ${region.shortName} buyers, so the comparison makes the decision more concrete.`
          },
          {
            question: "Should this kind of article link into device pages?",
            answer: `Yes. The comparison becomes more believable when it points into ${primary.name}, ${secondary?.name ?? primary.name}, and a real technical path.`
          },
          {
            question: "Where should the reader go next?",
            answer: `Toward the ${region.shortName} page, regional device guides, and pricing depending on how ready they are to act.`
          }
        ]
  };
}

function buildProblemGuide(region, blueprint) {
  const french = isFrenchRegion(region);
  const devices = devicesFor(blueprint.deviceSlugs);
  const [primary, secondary] = devices;
  const provider = region.providerFocus?.[0] ?? region.coverageSummary;

  return {
    region: region.slug,
    slug: blueprint.slug,
    title: blueprint.title,
    keyword: blueprint.keyword,
    description: french
      ? `Guide de depannage ${region.shortName} pour ${blueprint.problemName}, avec checklist, appareils relies et sortie directe vers support ou tarifs.`
      : `${blueprint.title} troubleshooting guide for ${region.name}, with a practical checklist, linked device pages, and a direct route into support or pricing.`,
    intro: french
      ? `${blueprint.problemName} sont parmi les requetes qui convertissent le plus vite quand la page apporte une solution claire. Le visiteur veut comprendre la cause, verifier son appareil, puis savoir s'il doit aller vers la page ${region.shortName}, les tarifs ou le support.`
      : `${blueprint.problemName} often convert quickly when the page gives a clear answer. The buyer wants to understand the cause, check the device path, and know whether the next click should be the ${region.shortName} page, pricing, or support.`,
    category: blueprint.kind,
    categoryLabel: categoryLabel(region, blueprint.kind),
    categoryDescription: categoryDescription(region, blueprint.kind),
    deviceSlugs: blueprint.deviceSlugs,
    sections: french
      ? [
          {
            kicker: "Cause",
            heading: "Commencer par la cause la plus probable",
            body: `Dans ${region.name}, beaucoup de visiteurs accusent l'offre trop vite alors que le blocage vient souvent du player, du reseau ou d'un mauvais ordre de test. Il faut d'abord isoler le probleme autour de ${provider} et du device principal.`
          },
          {
            kicker: "Checklist",
            heading: "Checklist courte avant de demander de l'aide",
            body: `${primary.name} puis ${secondary?.name ?? primary.name} servent ici de references pratiques. L'objectif est d'eliminer les causes frequentes avant de basculer vers le support.`,
            bullets: [
              `Verifier l'appareil principal: ${primary.name}.`,
              `Tester ensuite ${secondary?.name ?? primary.name} si un deuxieme device est disponible.`,
              "Garder un lien visible vers support et tarifs pour ne pas casser l'intention d'achat."
            ]
          },
          {
            kicker: "Sortie",
            heading: "Quand renvoyer vers support, appareils ou page regionale",
            body: `Si la checklist ne suffit pas, la page doit renvoyer vers le guide ${primary.name}, la page ${region.shortName} et le support. C'est ce maillage qui transforme une requete probleme en lead reel.`
          }
        ]
      : [
          {
            kicker: "Cause",
            heading: "Start with the most likely cause",
            body: `Across ${region.name}, many buyers blame the offer too early when the issue often comes from the player, the network path, or a poor testing order. The first step is to isolate the problem around ${provider} and the main device.`
          },
          {
            kicker: "Checklist",
            heading: "A short checklist before you contact support",
            body: `${primary.name} and ${secondary?.name ?? primary.name} act as the practical references here. The goal is to eliminate the common causes before escalating into support.`,
            bullets: [
              `Check the primary device first: ${primary.name}.`,
              `Test ${secondary?.name ?? primary.name} next if a second screen is available.`,
              "Keep support and pricing visible so troubleshooting does not break the buying path."
            ]
          },
          {
            kicker: "Exit path",
            heading: "When to route the reader into support, devices, or the regional page",
            body: `If the checklist does not solve it, the page should send the reader toward the ${primary.name} guide, the ${region.shortName} page, and support. That linking logic is what turns a problem query into real conversion intent.`
          }
        ],
    faqs: french
      ? [
          {
            question: `Quel appareil verifier d'abord pour ${blueprint.problemName} ?`,
            answer: `${primary.name} doit etre teste en premier, puis ${secondary?.name ?? primary.name} si un second appareil est disponible.`
          },
          {
            question: "Quand faut-il contacter le support ?",
            answer: "Quand la checklist de base n'a rien change ou quand le visiteur veut confirmer le bon player avant de commander."
          },
          {
            question: "Pourquoi relier un guide de probleme aux tarifs ?",
            answer: "Parce qu'un visiteur rassure sur la stabilite ou le device peut redevenir tres proche de la conversion."
          }
        ]
      : [
          {
            question: `Which device should be checked first for ${blueprint.problemName}?`,
            answer: `${primary.name} should be tested first, then ${secondary?.name ?? primary.name} if a second device is available.`
          },
          {
            question: "When should the buyer contact support?",
            answer: "When the basic checklist changes nothing or when they want the cleanest player advice before they subscribe."
          },
          {
            question: "Why link a problem-solving guide into pricing?",
            answer: "Because a buyer who regains confidence in stability or device fit can quickly return to purchase intent."
          }
        ]
  };
}

function buildGuide(region, blueprint) {
  switch (blueprint.kind) {
    case "high-intent":
      return buildHighIntentGuide(region, blueprint);
    case "event-based":
      return buildEventGuide(region, blueprint);
    case "comparison":
      return buildComparisonGuide(region, blueprint);
    case "problem-solving":
      return buildProblemGuide(region, blueprint);
    default:
      return null;
  }
}

export const guideCatalog = Object.entries(regionGuideBlueprints).flatMap(([regionSlug, blueprints]) => {
  const region = regionFor(regionSlug);
  return blueprints.map((blueprint) => buildGuide(region, blueprint)).filter(Boolean);
});

export function getGuidesByRegion(regionSlug) {
  return guideCatalog.filter((post) => post.region === regionSlug);
}

export function getGuidePost(regionSlug, slug) {
  return guideCatalog.find((post) => post.region === regionSlug && post.slug === slug);
}

export function getGuidesGroupedByCategory(regionSlug) {
  return guideCategories.map((category) => ({
    ...category,
    posts: getGuidesByRegion(regionSlug).filter((post) => post.category === category.slug)
  }));
}
