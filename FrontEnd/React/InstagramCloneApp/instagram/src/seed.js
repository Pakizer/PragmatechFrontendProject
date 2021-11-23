export function seedDatabase(firebase) {
  const users = [
    {
      userId: "F9Ey9HjSAQM17ifBUruyjGDluP23",
      userName: "pakizar",
      fullName: "Pakizar Masimli",
      emailAddress: "pakizerrmesimli@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "aytac",
      fullName: "Aytac Azerli",
      emailAddress: "aytac@gmail.com",
      following: [],
      followers: ["F9Ey9HjSAQM17ifBUruyjGDluP23"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "gulnar",
      fullName: "Gulnar Musayeva",
      emailAddress: "gulnar@gmail.com",
      following: [],
      followers: ["F9Ey9HjSAQM17ifBUruyjGDluP23"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "ruqeyya",
      fullName: "Ruqeyya Qasimli",
      emailAddress: "ruqeyya@gmail.com",
      following: [],
      followers: ["F9Ey9HjSAQM17ifBUruyjGDluP23"],
      dateCreated: Date.now(),
    },
  ];
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/img/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "gulnar",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "ruqeyya",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
