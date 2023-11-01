import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'

import './global.css'

export function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        {type: 'paragraph', content: 'Falaaa Dev 💻'},
        {type: 'paragraph', content: 'To fazendo um curso foda na Rocketseat'},
        {type: 'link', content: 'jane.design/doctorcare'},
      ],

      publishedAt: new Date('2023-10-31 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mayk Brito",
        role: "Front-End Developer @CompanyX"
      },
      content: [
        { type: "paragraph", content: "Olá pessoal! 👋" },
        { type: "paragraph", content: "Estou aprendendo muito sobre desenvolvimento web." },
        { type: "link", content: "companyx.com/webdev-course" }
      ],
      publishedAt: new Date("2023-11-01 15:30:00")
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/gabrielpramalho.png",
        name: "John Doe",
        role: "Mobile App Developer @TechCorp"
      },
      content: [
        { type: "paragraph", content: "Hey there! 📱" },
        { type: "paragraph", content: "Working on some exciting mobile app projects." },
        { type: "link", content: "techcorp-apps.com/projects" }
      ],
      publishedAt: new Date("2023-10-20 10:15:00")
    }
    
  ]

  return (
    <>
      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {
          posts.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
        }
        </main>
      </div>
    </>
  )
}

