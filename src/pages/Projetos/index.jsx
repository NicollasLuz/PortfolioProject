import Card from "../../components/Card"
import Container from '../../components/Container'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { DiJava  } from "react-icons/di";
import { GoPlusCircle  } from "react-icons/go";

function Projetos() {
    return (
        <>
            <Container>
                <h2>Projetos</h2>
                <Card
                    title="SomeBasicProjects"
                    description="Explore my repository of engaging projects, from games to interactive visualizations. Discover where creativity meets technology!"
                    icons={[DiJava, GoPlusCircle  ]}
                    lugar={"https://github.com/NicollasLuz/SomeBasicProjects"}
                />
                <Card
                    title="TaskManagementSystem"
                    description="Build a task management system, from database planning to developing screens for registering, managing and maintaining tasks and users."
                    icons={[FaHtml5, FaCss3Alt, FaJs, FaReact]}
                    lugar={"https://github.com/NicollasLuz/TaskManagementSystem"}
                />
                <Card
                    title="ContactManagement"
                    description="Project to implement a simple contact management system using React. The project will allow the user to add, remove and edit contacts in a list."
                    icons={[FaHtml5, FaCss3Alt, FaJs, FaReact]}
                    lugar={"https://github.com/NicollasLuz/ContactManagement"}
                />
                <Card
                    title="Jokenpo"
                    description="Project to make a jokenpo against the computer"
                    icons={[FaHtml5, FaCss3Alt, FaJs, FaReact]}
                    lugar={"https://github.com/NicollasLuz/Jokenpo"}
                />
            </Container>
        </>
    )
}

export default Projetos