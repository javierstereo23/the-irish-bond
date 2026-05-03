// TODO(i18n): English copy is best-effort and pending confirmation by the authors.
// TODO(parents): bios y taglines de Sean O'Connor y Morgan Wolf padre pendientes (Caro).
// TODO(ivy): incluir cuando llegue imagen.
// NOTE: image filename "/images/personajes/lian.png" se mantiene a propósito
// (renombramos en código a "Lean", el archivo no se toca).

const connor = {
  id: 'connor',
  name: 'Connor',
  surname: "O'Connor",
  age: 30,
  role: { es: 'Jugador de Rugby', en: 'Rugby Player' },
  sign: 'Capricornio',
  color: '#4a6fa5',
  image: '/images/personajes/connor.png',
  description: {
    es: 'Nació para liderar, aunque nunca lo haya elegido. Estructura firme, presencia imponente que ordena todo a su alrededor. Rugby, disciplina y un apellido que pesa. Es el pilar. Y el límite que nadie quiere cruzar. Porque alguien tiene que sostener lo que empezó.',
    en: 'Born to lead, even if he never chose it. Solid structure, imposing presence that aligns everything around him. Rugby, discipline and a name that weighs. He is the pillar. And the line no one wants to cross. Because someone has to hold up what was started.',
  },
  tagline: {
    es: 'Imponente sin esfuerzo. Donde Connor pisa, el resto se alinea.',
    en: 'Imposing without effort. Where Connor steps, the rest fall in line.',
  },
  traits: {
    es: ['Líder', 'Estoico', 'Pilar', 'Inflexible'],
    en: ['Leader', 'Stoic', 'Pillar', 'Unyielding'],
  },
  eyes: { es: 'Grises', en: 'Grey' },
}

const brennan = {
  id: 'brennan',
  name: 'Brennan',
  surname: "O'Connor",
  age: 27,
  role: { es: 'Futbolista', en: 'Footballer' },
  sign: 'Sagitario',
  color: '#d4700a',
  image: '/images/personajes/brennan.jpg',
  description: {
    es: 'Talento natural, decisiones impulsivas. Aura luminosa, sonrisa fácil que desarma en segundos. Vive el fútbol como vive todo: sin freno. Nunca sabés si te va a salvar… o a llevar con él. Porque nunca aprendió a quedarse dentro del límite.',
    en: 'Natural talent, impulsive choices. Luminous aura, an easy smile that disarms in seconds. He lives football the way he lives everything: without brakes. You never know if he will save you… or take you down with him. Because he never learned to stay within the line.',
  },
  tagline: {
    es: 'Sonríe y todo se enciende. El problema es cuando no frena.',
    en: 'He smiles and everything ignites. The problem is when he does not stop.',
  },
  traits: {
    es: ['Carismático', 'Impulsivo', 'Luminoso', 'Sin freno'],
    en: ['Charismatic', 'Impulsive', 'Luminous', 'Unbraked'],
  },
  eyes: { es: 'Color miel', en: 'Honey' },
}

const nail = {
  id: 'nail',
  name: 'Nail',
  surname: "O'Connor",
  age: 24,
  role: { es: 'Jugador de Póquer', en: 'Poker Player' },
  sign: 'Géminis',
  color: '#2d7a3a',
  image: '/images/personajes/nail.png',
  description: {
    es: 'No reacciona: anticipa. Ojos verdes, silenciosos, que ven demasiado. Jugador de póker profesional; mientras los demás hablan, él decide. Nunca muestra de más. Nunca deja lugar a dudas. Nunca se equivoca. Y casi siempre está… donde nadie más se queda.',
    en: 'He does not react: he anticipates. Green eyes, silent, that see too much. A professional poker player; while others speak, he decides. He never shows too much. He never leaves room for doubt. He never makes a mistake. And he is almost always… where no one else stays.',
  },
  tagline: {
    es: 'Ojos verdes que no parpadean. Siempre en el lugar donde empieza el peligro.',
    en: 'Green eyes that do not blink. Always where danger starts.',
  },
  traits: {
    es: ['Anticipador', 'Silencioso', 'Estratega', 'Indescifrable'],
    en: ['Anticipator', 'Silent', 'Strategist', 'Unreadable'],
  },
  eyes: { es: 'Verdes intensos', en: 'Intense green' },
}

const lean = {
  id: 'lean',
  name: 'Lean',
  surname: "O'Connor",
  age: 24,
  role: { es: 'Piloto de Fórmula 2', en: 'Formula 2 Driver' },
  sign: 'Géminis',
  color: '#c41e3a',
  // image filename intencionalmente no renombrado (lian.png) — ver nota arriba
  image: '/images/personajes/lian.png',
  description: {
    es: 'Vive al límite de lo que puede controlar. Frío, preciso, con una perfección que no admite error. La Fórmula 1 no es su sueño: es su prueba. En la pista no duda. Fuera de ella… tampoco debería. Porque fallar nunca fue una opción.',
    en: 'He lives at the edge of what he can control. Cold, precise, with a perfection that admits no error. Formula 1 is not his dream: it is his test. On the track he does not doubt. Off it… he should not either. Because failing was never an option.',
  },
  tagline: {
    es: 'Perfecto. Frío. Inalcanzable. Corre como si equivocarse no fuera una opción.',
    en: 'Perfect. Cold. Unreachable. He drives as if a mistake were not an option.',
  },
  traits: {
    es: ['Perfeccionista', 'Frío', 'Preciso', 'Inalcanzable'],
    en: ['Perfectionist', 'Cold', 'Precise', 'Unreachable'],
  },
  eyes: { es: 'Celestes', en: 'Blue' },
}

const molly = {
  id: 'molly',
  name: 'Molly',
  surname: "O'Connor",
  age: 21,
  role: { es: 'La que cambia el juego', en: 'The one who changes the game' },
  sign: 'Piscis',
  color: '#8b4a6b',
  image: '/images/personajes/molly.png',
  description: {
    es: 'No busca protagonismo, pero siempre está. Caótica, luminosa, con una energía que rompe el molde. Observa, entiende y guarda más de lo que dice. Es la única que no compite… y la que cambia el juego. Porque nadie le enseñó a ocupar su lugar… y aun así lo hizo.',
    en: 'She does not seek the spotlight, but she is always there. Chaotic, luminous, with an energy that breaks the mold. She observes, understands and keeps more than she says. The only one who does not compete… and the one who changes the game. Because no one taught her to take her place… and she did anyway.',
  },
  tagline: {
    es: 'Caos suave. Luz propia. La única que ve lo que nadie mira.',
    en: 'Soft chaos. Her own light. The only one who sees what no one else looks at.',
  },
  traits: {
    es: ['Caótica', 'Luminosa', 'Observadora', 'Auténtica'],
    en: ['Chaotic', 'Luminous', 'Observer', 'Authentic'],
  },
  eyes: { es: 'Verdes esmeralda', en: 'Emerald green' },
}

const morganWolf = {
  id: 'morgan',
  name: 'Morgan',
  surname: 'Wolf',
  age: 26,
  role: { es: 'Fórmula 1', en: 'Formula 1' },
  sign: 'Escorpio',
  color: '#d4a853',
  image: '/images/personajes/morgan.png',
  description: {
    es: 'Criada en el poder, entrenada para dominarlo. Elegancia afilada, mirada que no pide permiso. En la Fórmula 1 no sigue reglas: las crea. Y siempre tiene un plan que no vas a ver venir. Ni cuando ya estás dentro.',
    en: 'Raised in power, trained to master it. Sharpened elegance, a gaze that asks no permission. In Formula 1 she does not follow rules: she writes them. And she always has a plan you will not see coming. Not even when you are already inside it.',
  },
  tagline: {
    es: 'No entra en el juego. Lo diseña.',
    en: 'She does not enter the game. She designs it.',
  },
  traits: {
    es: ['Estratega', 'Afilada', 'Imprevisible', 'Dominante'],
    en: ['Strategist', 'Sharp', 'Unpredictable', 'Dominant'],
  },
  eyes: { es: 'Marrones profundos', en: 'Deep brown' },
}

const maison = {
  id: 'maison',
  name: 'Maison',
  surname: 'Morris',
  age: 28,
  role: { es: 'Jugador de Rugby', en: 'Rugby Player' },
  color: '#4a6fa5',
  image: '/images/personajes/maison.png',
  description: {
    es: 'No busca protagonismo, pero cambia el equilibrio. Firme, cercano, con una presencia que sostiene. Sabe leer el cuerpo… y lo que nadie dice. Siempre llega donde hace falta. Y deja marca sin hacer ruido.',
    en: 'He does not seek the spotlight, but he shifts the balance. Steady, close, with a presence that holds. He reads the body… and what no one says. He always shows up where he is needed. And leaves a mark without making noise.',
  },
  tagline: {
    es: 'Presencia que sostiene. Sin ruido, lo cambia todo.',
    en: 'A presence that holds. Without noise, he changes everything.',
  },
  traits: {
    es: ['Sereno', 'Firme', 'Intuitivo', 'Constante'],
    en: ['Calm', 'Steady', 'Intuitive', 'Constant'],
  },
  eyes: { es: 'Avellana', en: 'Hazel' },
}

const francesco = {
  id: 'francesco',
  name: 'Francesco',
  surname: '',
  age: null,
  role: { es: 'Fórmula 1', en: 'Formula 1' },
  color: '#d4d4d4',
  image: '/images/personajes/francesco.jpg',
  description: {
    es: 'Carisma, velocidad y una imagen perfecta. Siempre parece tener el control… aunque no muestre cómo. En la Fórmula 1 no todo se juega en la pista. Porque juega en otra liga.',
    en: 'Charisma, speed and a flawless image. He always seems to be in control… even when he never shows how. In Formula 1, not everything is played on the track. Because he plays in a different league.',
  },
  tagline: {
    es: 'Demasiado perfecto para ser casual. Juega en otra liga.',
    en: 'Too perfect to be casual. He plays in a different league.',
  },
  traits: {
    es: ['Carismático', 'Calculador', 'Pulido', 'Distante'],
    en: ['Charismatic', 'Calculating', 'Polished', 'Aloof'],
  },
  eyes: { es: '—', en: '—' },
}

// Placeholders — pendiente copy + imagen de Caro.
const seanOConnor = {
  id: 'sean-oconnor',
  name: 'Sean',
  surname: "O'Connor",
  role: { es: 'Padre · Origen del legado', en: 'Father · Origin of the legacy' },
  color: '#6b6b6b',
  image: null,
  placeholder: true,
}

const morganWolfPadre = {
  id: 'morgan-wolf-padre',
  name: 'Morgan',
  surname: 'Wolf',
  role: { es: 'Padre · Origen del juego', en: 'Father · Origin of the game' },
  color: '#6b6b8a',
  image: '/images/personajes/morgan-wolf-sr.png',
  placeholder: true,
}

// TODO(ivy):
// const ivy = {
//   id: 'ivy',
//   name: 'Ivy',
//   ...
// }

export const characterGroups = [
  {
    id: 'oconnors',
    layoutKind: 'pairs',
    members: [connor, brennan, nail, lean, molly],
  },
  {
    id: 'kingmakers',
    layoutKind: 'placeholders',
    members: [seanOConnor, morganWolfPadre],
  },
  {
    id: 'rulebreakers',
    layoutKind: 'grid',
    // members: [morganWolf, maison, francesco, ivy] // ivy pendiente
    members: [morganWolf, maison, francesco],
  },
]
