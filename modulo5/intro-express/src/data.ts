type Dwarf = {
  id: number;
  name: string;
  phone: number;
  email: string;
  website: string;
  post: Posts[]
};

type Posts = {
  id: number,
  title: string,
  body: string,
  userId: number
}

export const dwarfs: Dwarf[] = [
  {
    id: 1,
    name: "Thorin",
    phone: 12345,
    email: "thorin@email.com",
    website: "www.thorin.com",
    post: [
      {
        id: 1.1,
        title: "loremipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        userId: 1
      },
      {
        id: 1.2,
        title: "loremipsum",
        body: "Morbi imperdiet in arcu ut posuere.",
        userId: 1
      }
    ]
  },
  {
    id: 2,
    name: "Balin",
    phone: 12345,
    email: "balin@email.com",
    website: "www.balin.com",
    post: [
      {
        id: 2.1,
        title: "loremipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        userId: 2
      },
      {
        id: 2.2,
        title: "loremipsum",
        body: "Morbi imperdiet in arcu ut posuere.",
        userId: 2
      }
    ]
  },
  {
    id: 3,
    name: "Dwalin",
    phone: 12345,
    email: "dwalin@email.com",
    website: "www.dwalin.com",
    post: [
      {
        id: 3.1,
        title: "loremipsum",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        userId: 3
      },
      {
        id: 3.2,
        title: "loremipsum",
        body: "Morbi imperdiet in arcu ut posuere.",
        userId: 3
      }
    ]
  },
];
