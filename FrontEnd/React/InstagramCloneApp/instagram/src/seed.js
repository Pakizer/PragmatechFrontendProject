export function seedDatabase(firebase) {
  const users = [
    {
      userId: "Vblbz0V4RJTQmV3rHSYfYCsHgOD2",
      username: "pakizar",
      fullName: "Pakizar Masimli",
      emailAddress: "pakizerrmesimli@gmail.com",
      following: [""],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "aytac",
      fullName: "Aytac Azerli",
      emailAddress: "aytac@gmail.com",
      following: [],
      followers: ["Vblbz0V4RJTQmV3rHSYfYCsHgOD2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "gulnar",
      fullName: "Gulnar Musayeva",
      emailAddress: "gulnar@gmail.com",
      following: [],
      followers: ["Vblbz0V4RJTQmV3rHSYfYCsHgOD2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "ruqeyya",
      fullName: "Ruqeyya Qasimli",
      emailAddress: "ruqeyya@gmail.com",
      following: [],
      followers: ["Vblbz0V4RJTQmV3rHSYfYCsHgOD2"],
      dateCreated: Date.now(),
    },
  ];
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
