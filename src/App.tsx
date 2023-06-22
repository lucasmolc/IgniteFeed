import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasmolc.png",
      name: "Lucas Mol de Carvalho Messias",
      role: "Full-Stack .NET Developer",
    },
    content: [
      { type: "paragraph", text: "Opa!" },
      {
        type: "paragraph",
        text: "Rede social feita por mim! ❤️",
      },
      {
        type: "link",
        anchor: [
          {
            text: "#redeSocial",
            link: "",
          },
          {
            text: "#igniteFeed",
            link: "",
          },
        ],
      },
    ],
    publishedAt: new Date("2023-06-21 20:59:00"),
  },
  
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/50550793?v=4",
      name: "Felipe Domingues de Miranda",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", text: "Fala galera 👋" },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portfólio.",
      },
      {
        type: "link",
        anchor: [
          {
            text: "👉 Felipe-Domingues/Rocketseat-NLW-Spacetime",
            link: "https://rocketseat-nlw-spacetime.vercel.app/",
          },
        ],
      },
      {
        type: "link",
        anchor: [
          {
            text: "#nlw",
            link: "",
          },
          {
            text: "#novoprojeto",
            link: "",
          },
          {
            text: "#rocketseat",
            link: "",
          },
        ],
      },
    ],
    publishedAt: new Date("2023-05-22 20:35:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main className={styles.main}>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
