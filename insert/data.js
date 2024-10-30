
const fruits = [
    {
        title: "Apple",
        description: "A sweet and crunchy fruit.",
        image:{
            url: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D",
            filename: "listingimage",
        }, 
        price: 200,
        country: "USA"
    },
    {
        title: "Banana",
        description: "A soft and sweet fruit, rich in potassium.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1667926862695-629f15968976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVxdWFkZXIlMjBiYW5hbmF8ZW58MHx8MHx8fDA%3D",
            filename: "listingimage",
        },
        price: 60,
        country: "Ecuador"
    },
    {
        title: "Cherry",
        description: "A small, round fruit with a pit.",
        image: {
            url: "https://media.istockphoto.com/id/172315512/photo/sweet-cherries.jpg?s=1024x1024&w=is&k=20&c=bYVKOqiGg-RujtMX26ba5wigj0jd94s1YvXST4tM7BM=",
            filename: "listingimage",
        },
        price: 250,
        country: "Turkey"
    },
    {
        title: "Date",
        description: "A sweet fruit often used in desserts.",
        image:{ 
            url: "https://media.istockphoto.com/id/516816924/photo/raw-organic-medjool-dates.webp?a=1&b=1&s=612x612&w=0&k=20&c=gD9D6zlQbBmIOPd8HhdsRndQI5iGcCuMP_rrRrmGSVQ=",
            filename: "listingimage",
        },
        price: 100,
        country: "Saudi Arabia"
    },
    {
        title: "Elderberry",
        description: "A small, dark berry used for syrups.",
        image: {
            url: "https://media.istockphoto.com/id/487676436/photo/bush-with-clusters-of-elderberry-fruit.webp?a=1&b=1&s=612x612&w=0&k=20&c=j5JHZAMWH5bw9rKUECPLvGeynJOMWxXyg5Fa1-zo7w4=",
            filename: "listingimage",
        },
        price: 160,
        country: "USA"
    },
    {
        title: "Fig",
        description: "A sweet fruit with a unique texture.",
        image:{
            url: "https://plus.unsplash.com/premium_photo-1669235171336-b47aa2955231?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpZ3xlbnwwfHwwfHx8MA%3D%3D",
            filename: "listingimage",
        },
        price: 190,
        country: "Turkey"
    },
    {
        title: "Grape",
        description: "A small round fruit, often used for making wine.",
        image: {
            url: "https://media.istockphoto.com/id/1024847158/photo/grapes-at-vineyard.webp?a=1&b=1&s=612x612&w=0&k=20&c=VcFBZvDc66s0gV2tqcEtQADaonP0R4_FOMd_Z8dLaZc=",
            filename: "listingimage",
        },
        price: 170,
        country: "Italy"
    },
    {
        title: "Honeydew",
        description: "A sweet, juicy melon.",
        image: {
            url:"https://media.istockphoto.com/id/1291607543/photo/fresh-ripe-melons-on-the-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=cn14csLRtoVIUrzweolOmwkUd6vrbDOA3qvuzGVvO2g=",
            filename: "listingimage",
        },
        price: 140,
        country: "USA"
    },
    {
        title: "Kiwi",
        description: "A small, brown, fuzzy fruit with green flesh.",
        image: {
            url: "https://media.istockphoto.com/id/636969172/photo/kiwi-fruit.jpg?s=1024x1024&w=is&k=20&c=kVP5uJM26FrK_2YodtX62yKmGyCFDcQk6Xapww0nGzU=",
            filename: "listingimage",
        },
        price: 70,
        country: "New Zealand"
    },
    {
        title: "Lemon",
        description: "A sour fruit used in cooking and drinks.",
        image: {
            url: "https://media.istockphoto.com/id/1216360617/photo/ripe-lemons-flat-lay-with-leaves-on-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=CHB-rcrxAHReDR2o0e59k4YSYV5G3xPCaFaV92g3Gw4=",
            filename: "listingimage",
        },
        price: 30,
        country: "Spain"
    },
    {
        title: "Mango",
        description: "A juicy tropical fruit.",
        image: {
            url: "https://media.istockphoto.com/id/667439312/photo/mangoes-in-basket-fresh-mango.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOeQ40bhwRACI1iotgT21rW3-p9Aw7lUBUILxKVd-Ac=",
            filename: "listingimage",
        },
        price: 200,
        country: "India"
    },
    {
        title: "Nectarine",
        description: "A smooth-skinned fruit similar to peaches.",
        image: {
            url: "https://media.istockphoto.com/id/186841055/photo/fresch-peach-fruits.webp?a=1&b=1&s=612x612&w=0&k=20&c=U_H_pkbqHkMJNRL4cKNWZlKFLh60DSgDHOlhhcXCqp4=",
            filename: "listingimage",
        },
        price: 180,
        country: "USA"
    },
    {
        title: "Orange",
        description: "A juicy citrus fruit.",
        image: {
            url: "https://media.istockphoto.com/id/454369237/photo/orange-on-plant.webp?a=1&b=1&s=612x612&w=0&k=20&c=igLGrZXUE3pqZ5LPmkwTVgFJmcUZz-r_VpVU8jmZk-M=",
            filename: "listingimage",
        },
        price: 100,
        country: "Brazil"
    },
    {
        title: "Papaya",
        description: "A sweet tropical fruit.",
        image: {
            url:"https://plus.unsplash.com/premium_photo-1664391808687-55acdf5c7317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFwYXlhfGVufDB8fDB8fHww",
            filename: "listingimage",
        },
        price: 80,
        country: "Mexico"
    },
    {
        title: "Quince",
        description: "A fruit that is often made into jelly.",
        image:{ 
            url:"https://media.istockphoto.com/id/887394522/photo/quinces.jpg?s=1024x1024&w=is&k=20&c=p6oPw6lcPQ51lMrd2TjygdyUSNvvQeaa9DEdZBN8iFE=",
            filename: "listingimage",
        },
        price: 130,
        country: "Turkey"
    },
    {
        title: "Raspberry",
        description: "A sweet red berry, often used in desserts.",
        image: {
            url:"https://media.istockphoto.com/id/486346030/photo/ripe-raspberry-with-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=c_b5li0lWXqQA0OZQPlCl5_J6rUnKmFVxnc7k0JqJ1k=",
            filename: "listingimage",
        },
        price: 270,
        country: "USA"
    }
];

module.exports = fruits;