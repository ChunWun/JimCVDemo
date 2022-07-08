import Card from "../UI/Card";
import styles from "./Skills.module.css";
import SkillItem from "./SkillItem";

const SKILLS_LIST = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const Skills = (props) => {

    const skillsList = SKILLS_LIST.map((skill) => {
        return (
            <SkillItem
                key={skill.id}
                id={skill.id}
                name={skill.name}
                description={skill.description}
                price={skill.price}
            ></SkillItem>
        );
    });

    return (
        <section className={styles.meals}>
            <Card>{skillsList}</Card>
        </section>
    );
}

export default Skills;