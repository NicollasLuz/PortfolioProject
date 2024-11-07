import Card from "../../components/Card"
import Container from '../../components/Container'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { DiJava  } from "react-icons/di";
import { GoPlus } from "react-icons/go";

function Projetos() {
    return (
        <>
            <Container>
                <h2>Projetos</h2>
                <Card
                    title="SomeBasicProjects"
                    description="Explore my repository of engaging projects, from games to interactive visualizations. Discover where creativity meets technology!"
                    icons={[DiJava, GoPlus ]}
                />
                <Card
                    title="TaskManagementSystem"
                    description="Build a task management system, from database planning to developing screens for registering, managing and maintaining tasks and users."
                    icons={[FaHtml5, FaCss3Alt, FaJs, FaReact]}
                />
                <Card
                    title="ContactManagement"
                    description="Project to implement a simple contact management system using React. The project will allow the user to add, remove and edit contacts in a list."
                    icons={[FaHtml5, FaCss3Alt, FaJs, FaReact]}
                />
            </Container>
        </>
    )
}

export default Projetos