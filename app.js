// ========================================
// Animals of JC Heights - Interactive App
// ========================================

// Data (embedded for simplicity - in production would fetch from JSON)
const animalData = {
  categories: [
    {
      id: "CAT-CLIFF",
      name: "Cliff Dwellers",
      description: "Species uniquely adapted to the Palisades rock formations",
      icon: "mountain",
      color: "#8B4513",
      image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800",
      species: [
        { id: "SP-001", common_name: "Peregrine Falcon", scientific_name: "Falco peregrinus", status: "endangered_breeding", description: "World's fastest animal, diving at speeds over 200 mph. Nests on Palisades cliffs and tall buildings.", fun_fact: "Peregrine falcons were nearly extinct in NJ but have made a remarkable comeback thanks to conservation efforts.", habitat: ["cliffs", "tall_buildings", "bridges"], diet: ["pigeons", "songbirds", "bats"], activity: "diurnal", image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-002", common_name: "Red-tailed Hawk", scientific_name: "Buteo jamaicensis", status: "stable", description: "Large raptor with distinctive red tail, often seen soaring above The Heights.", fun_fact: "Their screech is so iconic it's often dubbed over bald eagle sounds in movies.", habitat: ["cliffs", "trees", "urban_areas"], diet: ["rodents", "rabbits", "small_birds"], activity: "diurnal", image: "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-003", common_name: "Turkey Vulture", scientific_name: "Cathartes aura", status: "stable", description: "Large dark bird that soars with wings in a V-shape. Essential for cleaning up roadkill.", fun_fact: "They have an incredible sense of smell and can detect carrion from over a mile away.", habitat: ["cliffs", "open_areas"], diet: ["carrion"], activity: "diurnal", image: "https://images.pexels.com/photos/10612275/pexels-photo-10612275.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-005", common_name: "Five-lined Skink", scientific_name: "Plestiodon fasciatus", status: "special_concern", description: "New Jersey's only native lizard! Found in rocky crevices of the Palisades.", fun_fact: "Juveniles have bright blue tails that fade as they mature. If grabbed by a predator, they can detach their tail!", habitat: ["rocky_outcrops", "woodland_edges"], diet: ["insects", "spiders"], activity: "diurnal", image: "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-004", common_name: "Black Vulture", scientific_name: "Coragyps atratus", status: "expanding_range", description: "Stockier than turkey vultures with shorter tails and gray heads. Range expanding northward.", fun_fact: "Unlike turkey vultures, they hunt by sight rather than smell and are more social.", habitat: ["cliffs", "urban_rooftops"], diet: ["carrion"], activity: "diurnal", image: "https://images.pexels.com/photos/10612275/pexels-photo-10612275.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      id: "CAT-MAMMAL",
      name: "Urban Mammals",
      description: "Mammals adapted to life in The Heights",
      icon: "paw",
      color: "#654321",
      image: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=800",
      species: [
        { id: "SP-010", common_name: "Eastern Gray Squirrel", scientific_name: "Sciurus carolinensis", status: "abundant", description: "The most commonly seen mammal in The Heights, active year-round.", fun_fact: "They plant thousands of trees annually by forgetting where they buried their acorns.", habitat: ["parks", "residential_trees"], diet: ["nuts", "seeds", "bird_eggs"], activity: "diurnal", image: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-011", common_name: "Raccoon", scientific_name: "Procyon lotor", status: "abundant", description: "Highly intelligent nocturnal mammal known for 'washing' food and raiding trash.", fun_fact: "Their 'hands' have more nerve endings than most mammals, giving them incredible dexterity.", habitat: ["storm_drains", "attics", "trees"], diet: ["omnivore", "trash", "pet_food"], activity: "nocturnal", image: "https://images.pexels.com/photos/3714428/pexels-photo-3714428.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-012", common_name: "Virginia Opossum", scientific_name: "Didelphis virginiana", status: "stable", description: "North America's only marsupial! Beneficial for eating ticks and pests.", fun_fact: "They're nearly immune to rabies due to their low body temperature, and one opossum can eat 5,000 ticks per season!", habitat: ["backyards", "under_porches", "trees"], diet: ["ticks", "insects", "carrion", "fruit"], activity: "nocturnal", image: "https://images.pexels.com/photos/16045935/pexels-photo-16045935.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-015", common_name: "White-tailed Deer", scientific_name: "Odocoileus virginianus", status: "overabundant", description: "Increasingly common in urban areas, moving along greenways and rail corridors.", fun_fact: "Can jump 8 feet high and 30 feet in a single bound.", habitat: ["greenways", "parks", "rail_corridors"], diet: ["browse", "gardens"], activity: "crepuscular", image: "https://images.pexels.com/photos/62640/pexels-photo-62640.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-016", common_name: "Red Fox", scientific_name: "Vulpes vulpes", status: "stable", description: "Adaptable canid increasingly seen in urban areas, especially near parks.", fun_fact: "They use the Earth's magnetic field to hunt, pouncing in a northeasterly direction for maximum success.", habitat: ["parks", "rail_corridors", "cemetery"], diet: ["rodents", "rabbits", "birds", "fruit"], activity: "crepuscular", image: "https://images.pexels.com/photos/247399/pexels-photo-247399.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-017", common_name: "Eastern Coyote", scientific_name: "Canis latrans", status: "expanding", description: "Occasionally spotted moving along rail lines and the Palisades ridge.", fun_fact: "Eastern coyotes are larger than western ones because they have some wolf DNA from interbreeding.", habitat: ["rail_corridors", "greenways"], diet: ["rodents", "rabbits", "deer_fawns"], activity: "nocturnal", image: "https://images.pexels.com/photos/5732474/pexels-photo-5732474.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-013", common_name: "Striped Skunk", scientific_name: "Mephitis mephitis", status: "stable", description: "Nocturnal mammal famous for its defensive spray. Actually quite docile if not threatened.", fun_fact: "They stamp their feet as a warning before spraying - if you see this, back away slowly!", habitat: ["under_porches", "burrows", "gardens"], diet: ["insects", "grubs", "small_rodents"], activity: "nocturnal", image: "https://images.pexels.com/photos/5486970/pexels-photo-5486970.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-014", common_name: "Groundhog", scientific_name: "Marmota monax", status: "stable", description: "Large rodent that creates extensive burrow systems. True hibernator also called woodchuck.", fun_fact: "Their burrows can be 45 feet long and provide homes for other animals like rabbits and foxes.", habitat: ["parks", "cemeteries", "open_fields"], diet: ["vegetation", "clover", "garden_plants"], activity: "diurnal", image: "https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-018", common_name: "Big Brown Bat", scientific_name: "Eptesicus fuscus", status: "stable", description: "Common bat species that roosts in attics and eats thousands of insects nightly.", fun_fact: "A single bat can eat up to 1,000 mosquitoes in one hour!", habitat: ["attics", "barns", "tree_cavities"], diet: ["moths", "beetles", "mosquitoes"], activity: "nocturnal", image: "https://images.pexels.com/photos/1571079/pexels-photo-1571079.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-019", common_name: "Little Brown Bat", scientific_name: "Myotis lucifugus", status: "endangered", description: "Once common, now ENDANGERED due to White-nose Syndrome fungal disease.", fun_fact: "Populations have declined by over 90% due to White-nose Syndrome. Report any bat sightings!", habitat: ["attics", "caves", "tree_bark"], diet: ["insects", "mosquitoes"], activity: "nocturnal", image: "https://images.pexels.com/photos/1571079/pexels-photo-1571079.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      id: "CAT-BIRD",
      name: "Urban Birds",
      description: "Resident and migratory birds of The Heights",
      icon: "bird",
      color: "#4169E1",
      image: "https://images.pexels.com/photos/45851/bird-blue-cristata-cyanocitta-45851.jpeg?auto=compress&cs=tinysrgb&w=800",
      species: [
        { id: "SP-023", common_name: "Northern Cardinal", scientific_name: "Cardinalis cardinalis", status: "stable", description: "Bright red male is unmistakable. Year-round resident.", fun_fact: "One of the few songbirds where both males and females sing.", habitat: ["shrubs", "gardens", "woodland_edges"], diet: ["seeds", "fruit", "insects"], activity: "diurnal", image: "https://images.pexels.com/photos/45851/bird-blue-cristata-cyanocitta-45851.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-024", common_name: "Blue Jay", scientific_name: "Cyanocitta cristata", status: "stable", description: "Intelligent corvid known for loud calls and acorn caching.", fun_fact: "They can mimic hawk calls to scare other birds away from feeders.", habitat: ["trees", "parks", "residential_areas"], diet: ["acorns", "seeds", "insects"], activity: "diurnal", image: "https://images.pexels.com/photos/45851/bird-blue-cristata-cyanocitta-45851.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-026", common_name: "Cooper's Hawk", scientific_name: "Accipiter cooperii", status: "stable", description: "Agile hawk that hunts songbirds in backyards and parks.", fun_fact: "Has adapted so well to cities that urban populations may be denser than forest ones.", habitat: ["trees", "urban_parks", "residential_areas"], diet: ["songbirds", "pigeons", "small_mammals"], activity: "diurnal", image: "https://images.pexels.com/photos/2662434/pexels-photo-2662434.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      id: "CAT-REPTILE",
      name: "Reptiles & Amphibians",
      description: "Cold-blooded residents of The Heights",
      icon: "snake",
      color: "#228B22",
      image: "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=800",
      species: [
        { id: "SP-030", common_name: "Eastern Garter Snake", scientific_name: "Thamnophis sirtalis", status: "stable", description: "Most common snake in NJ, harmless and beneficial pest controller.", fun_fact: "They give live birth rather than laying eggs!", habitat: ["gardens", "parks", "near_water"], diet: ["slugs", "worms", "frogs", "insects"], activity: "diurnal", image: "https://images.pexels.com/photos/34426/snake-rainbow-boa-reptile-scale.jpg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-031", common_name: "Northern Black Racer", scientific_name: "Coluber constrictor", status: "stable", description: "Fast-moving, non-venomous snake. Despite the name, does not constrict prey.", fun_fact: "Can move at speeds up to 4 mph, making it one of the fastest snakes in North America.", habitat: ["fields", "woodland_edges", "rocky_areas"], diet: ["rodents", "birds", "insects", "frogs"], activity: "diurnal", image: "https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      id: "CAT-INVASIVE",
      name: "Invasive Species",
      description: "Non-native species that threaten local ecosystems",
      icon: "alert-triangle",
      color: "#DC143C",
      image: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800",
      species: [
        { id: "SP-040", common_name: "Spotted Lanternfly", scientific_name: "Lycorma delicatula", status: "invasive", description: "Destructive agricultural pest from Asia. Major threat to grapes, hops, and hardwood trees.", fun_fact: "They must be killed on sight! Scrape egg masses into alcohol or hand sanitizer.", habitat: ["tree_of_heaven", "grape_vines", "hardwoods"], diet: ["plant_sap"], activity: "diurnal", image: "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=800", action_required: true },
        { id: "SP-041", common_name: "Brown Rat", scientific_name: "Rattus norvegicus", status: "invasive", description: "Introduced from Asia, now ubiquitous in urban areas. Disease vector.", fun_fact: "Despite their name 'Norway Rat', they actually originated in northern China.", habitat: ["sewers", "buildings", "subways"], diet: ["omnivore", "garbage"], activity: "nocturnal", image: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    },
    {
      id: "CAT-DOMESTIC",
      name: "Domesticated Animals",
      description: "Pets and managed animal populations",
      icon: "heart",
      color: "#FF69B4",
      image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800",
      species: [
        { id: "SP-050", common_name: "Domestic Dog", scientific_name: "Canis familiaris", status: "domestic", description: "Man's best friend! License required in Jersey City.", fun_fact: "Jersey City has several great dog parks including Pershing Field and Van Vorst Park.", habitat: ["homes", "parks"], diet: ["dog_food"], activity: "varies", image: "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-051", common_name: "Domestic Cat", scientific_name: "Felis catus", status: "domestic", description: "Popular pet. Outdoor cats significantly impact bird populations.", fun_fact: "Consider keeping cats indoors to protect local wildlife - a single cat can kill dozens of birds per year.", habitat: ["homes", "outdoors"], diet: ["cat_food", "prey"], activity: "crepuscular", image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=800" },
        { id: "SP-052", common_name: "Community Cat", scientific_name: "Felis catus", status: "managed", description: "Managed colonies of feral cats. Ear-tipped cats have been sterilized through TNR programs.", fun_fact: "Look for the ear tip! Cats with clipped ears have been neutered and vaccinated.", habitat: ["colonies", "streets"], diet: ["prey", "provided_food"], activity: "crepuscular", image: "https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&w=800" }
      ]
    }
  ]
};

const quizData = [
  {
    id: 1,
    question: "You find a baby bird on the ground. What should you do?",
    options: [
      { text: "Take it home and care for it", correct: false, feedback: "It's illegal to keep wild birds, and parent birds often care for grounded fledglings." },
      { text: "Check if it's a nestling or fledgling, and leave fledglings alone", correct: true, feedback: "Correct! Fledglings with feathers are learning to fly. Parents are nearby." },
      { text: "Call 911", correct: false, feedback: "This isn't an emergency. Wildlife rehabilitators handle non-urgent cases." }
    ]
  },
  {
    id: 2,
    question: "A raccoon is in your trash at 10pm. What should you do?",
    options: [
      { text: "Chase it away aggressively", correct: false, feedback: "Never corner wildlife - they may bite if threatened." },
      { text: "Make noise from a safe distance and secure trash better", correct: true, feedback: "Correct! Noise will encourage them to leave, and securing trash prevents return visits." },
      { text: "Leave food out so it doesn't make a mess", correct: false, feedback: "Feeding wildlife creates dependency and attracts more animals." }
    ]
  },
  {
    id: 3,
    question: "You see a spotted lanternfly on a tree. What should you do?",
    options: [
      { text: "Take a photo and leave it alone", correct: false, feedback: "Spotted lanternflies are invasive and should be killed on sight." },
      { text: "Kill it and check for more", correct: true, feedback: "Correct! SLF are invasive pests. Kill all life stages and report large infestations." },
      { text: "Relocate it to a park", correct: false, feedback: "This would spread the infestation. They must be killed, not relocated." }
    ]
  },
  {
    id: 4,
    question: "You spot an opossum in your backyard at night. What should you know?",
    options: [
      { text: "Call animal control immediately - they're dangerous", correct: false, feedback: "Opossums are actually docile and beneficial! They eat thousands of ticks." },
      { text: "They're beneficial and rarely carry rabies - leave them alone", correct: true, feedback: "Correct! Their low body temperature makes them nearly immune to rabies, and they eat 5,000+ ticks per season." },
      { text: "Try to catch it and keep it as a pet", correct: false, feedback: "It's illegal to keep wildlife as pets in NJ, and they don't make good pets anyway." }
    ]
  },
  {
    id: 5,
    question: "A bat is flying inside your house. What's the priority?",
    options: [
      { text: "Try to catch it with your bare hands", correct: false, feedback: "Never handle bats with bare hands - rabies risk requires professional handling." },
      { text: "Open windows, close doors to other rooms, and call Animal Control", correct: true, feedback: "Correct! Bats can carry rabies. Contain the bat to one room and call professionals." },
      { text: "Ignore it - it will find its way out", correct: false, feedback: "A bat inside requires action due to rabies risk. Call Animal Control." }
    ]
  }
];

const agencyData = {
  situations: [
    { text: "Stray dog", agency: "JC Animal Control", phone: "201-547-4888" },
    { text: "Injured hawk", agency: "NJDEP Fish & Wildlife", phone: "609-292-2965", note: "They'll refer you to a licensed rehabilitator" },
    { text: "Bat in house", agency: "JC Animal Control", phone: "201-547-4888", note: "Rabies concern - don't touch!" },
    { text: "Spotted lanternfly", agency: "NJ Dept of Agriculture", phone: "609-406-6939", note: "Report large infestations" },
    { text: "Deer in yard", agency: "NJDEP Fish & Wildlife", phone: "609-292-2965", note: "Information only - they won't remove deer" },
    { text: "Rabies exposure", agency: "Hudson Regional Health", phone: "201-223-1133", note: "URGENT - seek medical attention" },
    { text: "Animal bite", agency: "JC Animal Control", phone: "201-547-4888", note: "Report required by law" },
    { text: "Peregrine falcon sighting", agency: "NJDEP ENSP", phone: "609-292-2965", note: "Help track endangered species!" }
  ],
  agencies: [
    { level: "Municipal", name: "Jersey City", agency: "Animal Care and Control", phone: "201-547-4888", website: "jerseycitynj.gov" },
    { level: "County", name: "Hudson County", agency: "Regional Health Commission", phone: "201-223-1133", website: "hudsonregional.gov" },
    { level: "State", name: "New Jersey", agency: "NJDEP Fish & Wildlife", phone: "609-292-2965", website: "dep.nj.gov/njfw" },
    { level: "Regional", name: "Palisades", agency: "Interstate Park Commission", phone: "", website: "njpalisades.org" },
    { level: "Federal", name: "U.S. Fish & Wildlife", agency: "NJ Field Office", phone: "609-646-9310", website: "fws.gov" }
  ]
};

// Icons SVG
const icons = {
  mountain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>`,
  paw: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="4" cy="8" r="2"/><path d="M12 14c-2.8 0-5 2.2-5 5v3h10v-3c0-2.8-2.2-5-5-5z"/></svg>`,
  bird: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/></svg>`,
  snake: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4c0 2 2 4 4 4s4-2 4-4-2-4-4-4-4 2-4 4z"/><path d="M8 8c0 4 4 8 8 8s8-4 8-8"/></svg>`,
  'alert-triangle': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  link: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`,
  chevron: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  flag: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`
};

// State
let currentQuizIndex = 0;
let quizAnswers = [];
let selectedCategory = null;

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroVideo();
  initScrollAnimations();
  initCounters();
  renderCategories();
  renderShowcase();
  initQuiz();
  initAgencyFinder();
  renderAgencyCards();
});

// Hero Video - Only load on desktop for performance
function initHeroVideo() {
  const video = document.querySelector('.hero-bg-video');
  if (!video) return;

  // Only load video on desktop (768px+) and if user doesn't prefer reduced motion
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isDesktop && !prefersReducedMotion) {
    const source = document.createElement('source');
    source.src = 'https://videos.pexels.com/video-files/31960626/31960626-hd_1920_1080_25fps.mp4';
    source.type = 'video/mp4';
    video.appendChild(source);
    video.load();
    video.style.display = 'block';

    // Hide fallback image when video is ready
    video.addEventListener('loadeddata', () => {
      const fallbackImg = document.querySelector('.hero-bg-img');
      if (fallbackImg) fallbackImg.style.display = 'none';
    });
  } else {
    // Hide video element on mobile
    video.style.display = 'none';
  }
}

// Navigation
function initNavigation() {
  const nav = document.getElementById('nav');
  const navMenuBtn = document.getElementById('navMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  navMenuBtn.addEventListener('click', () => {
    navMenuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenuBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Counter Animation
function initCounters() {
  const counters = document.querySelectorAll('.stat-number');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const duration = 1500;
  const stepTime = duration / 50;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + (target >= 100 ? 'M' : '+');
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, stepTime);
}

// Render Categories
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');

  grid.innerHTML = animalData.categories.map(cat => `
    <div class="category-card animate-on-scroll" data-category="${cat.id}" onclick="showCategoryModal('${cat.id}')">
      <div class="category-card-bg">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy">
      </div>
      <div class="category-card-overlay" style="background: linear-gradient(135deg, ${cat.color}CC 0%, rgba(10,15,10,0.9) 100%)"></div>
      <div class="category-card-content">
        <div class="category-card-icon">${icons[cat.icon]}</div>
        <h3 class="category-card-title">${cat.name}</h3>
        <span class="category-card-count">${cat.species.length} species</span>
      </div>
      <div class="category-card-arrow">${icons.arrow}</div>
    </div>
  `).join('');

  // Re-observe new elements
  initScrollAnimations();
}

// Render Showcase
function renderShowcase() {
  const grid = document.getElementById('showcaseGrid');

  // Get featured species
  const featured = [
    animalData.categories[0].species[0], // Peregrine Falcon
    animalData.categories[1].species[4], // Red Fox
    animalData.categories[4].species[0], // Spotted Lanternfly
    animalData.categories[2].species[0]  // Northern Cardinal
  ];

  grid.innerHTML = featured.map(species => `
    <div class="species-card animate-on-scroll" onclick="showSpeciesModal('${species.id}')">
      <div class="species-card-image">
        <img src="${species.image}" alt="${species.common_name}" loading="lazy">
        <span class="species-card-status ${getStatusClass(species.status)}">${formatStatus(species.status)}</span>
      </div>
      <div class="species-card-content">
        <h4 class="species-card-name">${species.common_name}</h4>
        <span class="species-card-scientific">${species.scientific_name}</span>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

function getStatusClass(status) {
  if (status.includes('endangered') || status === 'special_concern') return 'endangered';
  if (status === 'invasive') return 'invasive';
  return 'stable';
}

function formatStatus(status) {
  const map = {
    'endangered_breeding': 'Endangered',
    'special_concern': 'Special Concern',
    'invasive': 'Invasive',
    'stable': 'Stable',
    'abundant': 'Common',
    'overabundant': 'Common',
    'expanding': 'Expanding',
    'domestic': 'Domestic',
    'managed': 'Managed'
  };
  return map[status] || status;
}

// Quiz
function initQuiz() {
  renderQuizQuestion();

  document.getElementById('quizPrev').addEventListener('click', () => {
    if (currentQuizIndex > 0) {
      currentQuizIndex--;
      renderQuizQuestion();
    }
  });

  document.getElementById('quizNext').addEventListener('click', () => {
    if (quizAnswers[currentQuizIndex] !== undefined) {
      if (currentQuizIndex < quizData.length - 1) {
        currentQuizIndex++;
        renderQuizQuestion();
      } else {
        showQuizResults();
      }
    }
  });
}

function renderQuizQuestion() {
  const question = quizData[currentQuizIndex];
  const card = document.getElementById('quizCard');
  const progressBar = document.getElementById('quizProgressBar');
  const prevBtn = document.getElementById('quizPrev');
  const nextBtn = document.getElementById('quizNext');

  progressBar.style.width = `${((currentQuizIndex + 1) / quizData.length) * 100}%`;
  prevBtn.disabled = currentQuizIndex === 0;
  nextBtn.textContent = currentQuizIndex === quizData.length - 1 ? 'See Results' : 'Next';

  const selectedAnswer = quizAnswers[currentQuizIndex];
  const hasAnswered = selectedAnswer !== undefined;

  card.innerHTML = `
    <div class="quiz-question">${question.question}</div>
    <div class="quiz-options">
      ${question.options.map((opt, i) => `
        <button class="quiz-option ${selectedAnswer === i ? 'selected' : ''} ${hasAnswered ? (opt.correct ? 'correct' : (selectedAnswer === i ? 'incorrect' : '')) : ''}"
                onclick="selectQuizOption(${i})" ${hasAnswered ? 'disabled' : ''}>
          <span class="quiz-option-indicator">${hasAnswered && opt.correct ? '✓' : ''}</span>
          <span class="quiz-option-text">${opt.text}</span>
        </button>
      `).join('')}
    </div>
    ${hasAnswered ? `
      <div class="quiz-feedback ${question.options[selectedAnswer].correct ? 'correct' : 'incorrect'}">
        ${question.options[selectedAnswer].feedback}
      </div>
    ` : ''}
  `;
}

function selectQuizOption(index) {
  quizAnswers[currentQuizIndex] = index;
  renderQuizQuestion();
}

function showQuizResults() {
  const card = document.getElementById('quizCard');
  const correct = quizAnswers.filter((ans, i) => quizData[i].options[ans].correct).length;
  const percentage = Math.round((correct / quizData.length) * 100);

  let message = '';
  if (percentage === 100) message = 'Perfect! You\'re a wildlife expert!';
  else if (percentage >= 80) message = 'Great job! You know your wild neighbors well.';
  else if (percentage >= 60) message = 'Good effort! Keep learning about local wildlife.';
  else message = 'Keep exploring! There\'s always more to learn.';

  card.innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-score">${correct}/${quizData.length}</div>
      <div class="quiz-result-message">${message}</div>
      <button class="btn btn-primary" onclick="resetQuiz()">Try Again</button>
    </div>
  `;

  document.getElementById('quizNav').style.display = 'none';
}

function resetQuiz() {
  currentQuizIndex = 0;
  quizAnswers = [];
  document.getElementById('quizNav').style.display = 'flex';
  renderQuizQuestion();
}

// Agency Finder
function initAgencyFinder() {
  const chipsContainer = document.getElementById('situationChips');

  chipsContainer.innerHTML = agencyData.situations.map((sit, i) => `
    <button class="situation-chip" data-index="${i}">${sit.text}</button>
  `).join('');

  chipsContainer.querySelectorAll('.situation-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      // Update active state
      chipsContainer.querySelectorAll('.situation-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      // Show result
      const index = parseInt(chip.dataset.index);
      showAgencyResult(agencyData.situations[index]);
    });
  });
}

function showAgencyResult(situation) {
  const resultContainer = document.getElementById('agencyResult');

  resultContainer.innerHTML = `
    <div class="agency-result-card">
      <h4>For: ${situation.text}</h4>
      <div class="agency-name">${situation.agency}</div>
      ${situation.phone ? `
        <a href="tel:${situation.phone}" class="agency-phone">
          ${icons.phone}
          ${situation.phone}
        </a>
      ` : ''}
      ${situation.note ? `<p class="agency-note">${situation.note}</p>` : ''}
    </div>
  `;
}

function renderAgencyCards() {
  const container = document.getElementById('agencyCards');

  container.innerHTML = agencyData.agencies.map(agency => `
    <div class="agency-card animate-on-scroll">
      <span class="agency-card-level">${agency.level}</span>
      <h4 class="agency-card-name">${agency.name}</h4>
      <p class="agency-card-agency">${agency.agency}</p>
      <div class="agency-card-contact">
        ${agency.phone ? `
          <a href="tel:${agency.phone}">
            ${icons.phone}
            ${agency.phone}
          </a>
        ` : ''}
        <a href="https://${agency.website}" target="_blank" rel="noopener">
          ${icons.link}
          ${agency.website}
        </a>
      </div>
    </div>
  `).join('');

  initScrollAnimations();
}

// Modals
function showSpeciesModal(speciesId) {
  const species = findSpecies(speciesId);
  if (!species) return;

  const modal = document.getElementById('speciesModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <button class="modal-close" onclick="closeModal()">${icons.close}</button>
    <div class="modal-image">
      <img src="${species.image}" alt="${species.common_name}">
    </div>
    <div class="modal-body">
      <span class="modal-status ${getStatusClass(species.status)}">${formatStatus(species.status)}</span>
      <h2 class="modal-title">${species.common_name}</h2>
      <p class="modal-scientific">${species.scientific_name}</p>
      <p class="modal-description">${species.description}</p>
      ${species.fun_fact ? `
        <div class="modal-funfact">
          <div class="modal-funfact-title">Fun Fact</div>
          <p class="modal-funfact-text">${species.fun_fact}</p>
        </div>
      ` : ''}
      <div class="modal-meta">
        <div class="modal-meta-item">
          <div class="modal-meta-label">Habitat</div>
          <div class="modal-meta-value">${species.habitat.map(h => h.replace(/_/g, ' ')).join(', ')}</div>
        </div>
        <div class="modal-meta-item">
          <div class="modal-meta-label">Diet</div>
          <div class="modal-meta-value">${species.diet.map(d => d.replace(/_/g, ' ')).join(', ')}</div>
        </div>
        <div class="modal-meta-item">
          <div class="modal-meta-label">Activity</div>
          <div class="modal-meta-value">${species.activity}</div>
        </div>
        ${species.action_required ? `
          <div class="modal-meta-item" style="grid-column: span 2; background: rgba(220,20,60,0.2);">
            <div class="modal-meta-label" style="color: #DC143C;">Action Required</div>
            <div class="modal-meta-value">Kill on sight! Report large infestations.</div>
          </div>
        ` : ''}
      </div>

      <!-- AI Transparency Disclosure -->
      <div class="ai-disclosure">
        <button class="ai-disclosure-toggle" onclick="toggleAIDisclosure(this)">
          <span class="ai-disclosure-icon">${icons.info || '&#9432;'}</span>
          <span>About this content</span>
          <span class="ai-disclosure-chevron">${icons.chevron || '&#9662;'}</span>
        </button>
        <div class="ai-disclosure-content">
          <p><strong>AI-Generated Content</strong></p>
          <p>This species information was generated using Claude Opus 4.5 and reviewed by community contributors. We're actively collecting feedback on accuracy and potential issues.</p>
          <div class="ai-disclosure-actions">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf5gTPvC4ydze_sxc469y83CB0yFJm7m81ja0BWVSdPUW4B7g/viewform" target="_blank" rel="noopener" class="ai-disclosure-btn">
              ${icons.flag || '&#9873;'} Report an issue or correction
            </a>
          </div>
          <p class="ai-disclosure-note">This project is <a href="https://github.com/chaiwithjai/jc-animals" target="_blank" rel="noopener">open source</a>. Join our <a href="#contribute">monthly meetup</a> to contribute!</p>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Close on backdrop click
  document.getElementById('modalBackdrop').onclick = closeModal;
}

function showCategoryModal(categoryId) {
  const category = animalData.categories.find(c => c.id === categoryId);
  if (!category) return;

  const modal = document.getElementById('speciesModal');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <button class="modal-close" onclick="closeModal()">${icons.close}</button>
    <div class="modal-image" style="aspect-ratio: 21/9;">
      <img src="${category.image}" alt="${category.name}">
      <div style="position: absolute; inset: 0; background: linear-gradient(135deg, ${category.color}CC 0%, rgba(10,15,10,0.7) 100%);"></div>
      <div style="position: absolute; bottom: 24px; left: 24px; color: white;">
        <div style="margin-bottom: 8px;">${icons[category.icon]}</div>
        <h2 style="font-size: 1.75rem; font-weight: 700;">${category.name}</h2>
        <p style="opacity: 0.8;">${category.species.length} species</p>
      </div>
    </div>
    <div class="modal-body">
      <p class="modal-description">${category.description}</p>
      <div class="showcase-grid" style="margin-top: 24px;">
        ${category.species.map(species => `
          <div class="species-card" onclick="event.stopPropagation(); showSpeciesModal('${species.id}')">
            <div class="species-card-image">
              <img src="${species.image}" alt="${species.common_name}" loading="lazy">
              <span class="species-card-status ${getStatusClass(species.status)}">${formatStatus(species.status)}</span>
            </div>
            <div class="species-card-content">
              <h4 class="species-card-name">${species.common_name}</h4>
              <span class="species-card-scientific">${species.scientific_name}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalBackdrop').onclick = closeModal;
}

function closeModal() {
  const modal = document.getElementById('speciesModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function findSpecies(id) {
  for (const cat of animalData.categories) {
    const species = cat.species.find(s => s.id === id);
    if (species) return species;
  }
  return null;
}

// Close modal on escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// AI Disclosure Toggle
function toggleAIDisclosure(button) {
  const disclosure = button.closest('.ai-disclosure');
  disclosure.classList.toggle('expanded');
}
