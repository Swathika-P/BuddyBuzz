import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",
    friends: [],
    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Harry",
    lastName: "Potter",
    email: "harrypotter@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "harrydp.jpeg",
    friends: [],
    location: "Number 4, Privet Drive, Little Whinging",
    occupation: "Head Of Auror Dept",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Severus",
    lastName: "Snape",
    email: "severussnape@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "snape.webp",
    friends: [],
    location: "Spinner's End, Cokeworth",
    occupation: "Hogwarts Potions master",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,

  },
  {
    _id: userIds[3],
    firstName: "Hermoine",
    lastName: "Granger",
    email: "hermoinegranger@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "hermoinedp.jpeg",
    friends: [],
    location: "8 Heathgate, Hampstead Garden Suburb, London",
    occupation: "Minister for Magic",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Ronald",
    lastName: "Weasley",
    email: "ronaldweasley@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "rondp.webp",
    friends: [],
    location: " The Burrow, Ottery St Catchpole, Devon",
    occupation: "Auror",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Draco",
    lastName: "Malfoy",
    email: "dracomalfoy@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "dracodp.webp",
    friends: [],
    location: "Malfoy Manor, the magnificent mansion in Wiltshire",
    occupation: "Hogwarts School Governor",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Albus",
    lastName: "Dumbledore",
    email: "albusdumbledore@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "dumdp.jpg",
    friends: [],
    location: "Mould-on-the-Wold and Godric's Hollow",
    occupation: "Hoswarts Headmaster",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Rubeus",
    lastName: "Hagrid",
    email: "rubeushagrid@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "hagriddp.jpg",
    friends: [],
    location: "Hogwarts School of Witchcraft and Wizardry",
    occupation: "Grounds at Hogwarts",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,

  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Harry",
    lastName: "Potter",
    location: "Number 4, Privet Drive, Little Whinging",
    description: "Expecto patronum!!!",
    picturePath: "harrypost.gif",
    userPicturePath: "harrydp.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "The Boy Who Lived!!",
      "Awesome Harry..",
      "Long Live Harry",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Hermoine",
    lastName: "Granger",
    location: "8 Heathgate, Hampstead Garden Suburb, London",
    description:
      "Stop, stop, stop! You're going to take someone's eye out. Besides, you're saying it wrong. It's LeviOsa, not LeviosAR! ",
    picturePath: "hermoinepost.gif",
    userPicturePath: "hermoinedp.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "OH well done, see everyone Ms.Granger has done it!!",
      "Well done Hermoine",
      "It's LeviOsa, not LeviosAR! - Nice Granger",
      "They've yet to think of a spell that our Hermione can't do",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Ronald",
    lastName: "Weasley",
    location: " The Burrow, Ottery St Catchpole, Devon",
    description:
      "Why Spiders? Why Couldn't It Be 'Follow The Butterflies'?",
    picturePath: "ronpost.jpg",
    userPicturePath: "rondp.webp",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "Bloody Hell,Ron",
      "HaHa Ron",
      "Hey RED HAIR ;)",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Draco",
    lastName: "Malfoy",
    location: "Malfoy Manor, the magnificent mansion in Wiltshire",
    description:
      "My Father will hear about this :|",
    picturePath: "dracopost.jpg",
    userPicturePath: "dracodp.webp",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "Is that a thread????",
      "Try to be Good Malfoy",
      "The boy who had no choices :-(",
      "Scared? Malfoy >_< ... By Pottah ;)",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Albus",
    lastName: "Dumbledore",
    location: "Mould-on-the-Wold and Godric's Hollow",
    description:
      "We are only as strong as we are united, as weak as we are divided.",
    picturePath: "dumpost.jpg",
    userPicturePath: "dumdp.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "Albus percival wulfric brian dumbledore!!!",
      "Champion of equality and acceptance",
      "Severus Snape: Dumbledore, you trusted me with a mission greater than myself. Your forgiveness gave me redemption. #UnbreakableBond #Always",
      "#WiseWizard #GreatestHeadmaster",
      "f Hogwarts had WiFi, would you be constantly Googling 'How to defeat Dark Lords?'#TechSavvy",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Rubeus",
    lastName: "Hagrid",
    location: "Hogwarts School of Witchcraft and Wizardry",
    description:
      "Happy Birthday Harry <3",
    picturePath: "hagridpost.webp",
    userPicturePath: "hagriddp.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "Hagrid, you're the best friend anyone could ask for!",
      "#KeeperOfKeys",
      "#GentleGiant #CakeWizard",
      "I Shouldn't've Said That. I Should Not Have Said That..HAHA ",
    ],
  },
];
