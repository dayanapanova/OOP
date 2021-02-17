/* What is OOP and why to use it ?
    A large part of making good software is the ability to reuse the code and be able to change it easy.
    For the sake of understanding why to use OOP we can take an example of a video game.
    You are going to have a hero right? And this hero will have a name, age, health and maybe an object of invetory.
    To construct your hero you are going to need tos tore the data in variables and functions. Now imagine that you have 
    many heroes, many monsters, many wizards, many demons, etc. Writting variables and function for all those characters
    will be very annoying and complecated. But if make for example a class livingThing() for example writting the code 
    can be much more easier.


    const hero = {
        name: 'Elsa',
        age: 25,
        health: 90,
        armor: 70,
    }

    This is out first hero. Imagine the second hero :

    const monster = {
        name: 'Anger',
        age: 30,
        health: 120,
        armor: 130
    }

    And another, and another, and another character. Instead we can do this :

    function LivingThing(name, age, health, armor) {
        const obj = {}
        this.name = name
        this.age = age,
        this.health = health,
        this.armor = armor
        return obj;
    }

    const hero1 = new LivingThing('Anger', 30, 120, 130);
    const hero2 = new LivingThing('Elsa', 25, 90, 70);

    With OOP we write less code and make it easier to update.
*/