const menuBtn = () => {
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");
    const header = document.getElementById("menuHeader");
    const title = document.getElementById("title");
        if (nav.style.display === "none") {
            nav.style.display = "block";
            // menu.style.backgroundColor = "black";
            menu.style.translate = "0px -39px";
            // header.style.backgroundColor = "white";
            // title.style.backgroundColor = "black";
            // title.style.color = "#9C6DFA";
        } else {
            nav.style.display = "none";
            // menu.style.backgroundColor = "#9C6DFA";
            // header.style.backgroundColor = "#9C6DFA";
            // title.style.color = "black";
            // title.style.backgroundColor = "#9C6DFA";
            menu.style.translate = "0px 0px";
        }
};

export default menuBtn;

// const closeNav = () => {
//     nav.style.display = "none";
//     menu.style.backgroundColor = "#9C6DFA";
//     header.style.backgroundColor = "#9C6DFA";
//     title.style.color = "black";
//     title.style.backgroundColor = "#9C6DFA";
//     menu.style.translate = "0px 0px";
// }






