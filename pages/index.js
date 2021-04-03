import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";


export default function Home(props){
    return(
        <div>
            <header className="headerContainer">
                <img src={props.avatar_url}/>
                <div>
                    <h3>Carlos Eduardo Menezes Junior</h3>
                    <Link href="/sobre">
                        <a style={{fontWeight:"bold"}}>
                            Sobre mim
                        </a>
                    </Link>
                </div>
                
            </header>
            
            <div className="conteudos">
                <div className="postsContainer">
                    <h4>Meus Repositórios Favoritos</h4>
                    {
                        props.repos.map((project)=>{
                            return(
                                <article className="postsContainer__post">
                                    <a href={"https://github.com/carloseduardo1995/"+project.repo}>
                                        {project.repo}
                                    </a>
                                    <p>
                                        {project.description}
                                    </p>
                                </article>
                            )
                            })
                    }
                </div>
                
            </div>
           
        </div>
    )
}

export async function getStaticProps(){

    const githubResponse = await fetch('https://api.github.com/users/carloseduardo1995')
        .then(res=>res.json())

    const repos = await fetch('https://gh-pinned-repos.now.sh/?username=carloseduardo1995')
        .then(res=>res.json())

    return{
        props: {
            avatar_url: githubResponse.avatar_url,
            repos,
        }
    }
}