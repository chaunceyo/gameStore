const consoleList = [
    {
        console_name: 'Dragon Ball: Sparking! Zero',
        console_price: 59.99,
        console_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202405/2216/cbb03393f0ab1149f2b89a8194ce19e596a24fa5bec6526a.png',
    }
]

const gameList = [
    {
        game_name: 'Dragon Ball: Sparking! Zero',
        game_price: 59.99,
        game_gif: 'https://cdn5.idcgames.com/storage/image/1511/dragon-ball-sparking-zero-description1/default.gif',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202405/2216/cbb03393f0ab1149f2b89a8194ce19e596a24fa5bec6526a.png',
    },
    {
        game_name: 'NBA 2K25',
        game_price: 39.99,
        game_gif: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzh1cTlrazB1aW9waDMxZ2U0ZHE4YXg3cXM1cGVsdGVmaHB5ajcyciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ARHxQeaVrupC0xSu5q/giphy.gif',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202406/0521/47126dbd889a804f04e5b80ea35973622b041c060c9e1249.jpg',
    },
    {
        game_name: 'Call of Duty: Black Ops 6',
        game_price: 59.99,
        game_gif: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjVmbG91bnUwOWxyNGJvM3ltZzQ4ejgzdWZyd21iYmJ5eWxwcTF6biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mUWHfLNbqtfEGwRhwc/giphy.gif',
        game_img: 'https://support.activision.com/content/dam/atvi/support/product/hero/BO6-FOB.jpg',
    },
    {
        game_name: `Naruto X Boruto Ninja Storm Connections`,
        game_price: 29.99,
        game_gif: 'https://i.makeagif.com/media/12-23-2023/DJZMCj.gif',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2407/06ae9175e65c0965e44b12b4f34f7fe5aa491bbf7e5ce5c6.png',
    },
    {
        game_name: 'Madden 25',
        game_price: 39.99,
        game_gif: 'https://media4.giphy.com/media/pSW43muOlX7qCt3PiR/200w.gif?cid=6c09b952sof6gsric4amyj1kap324ru62cw0gyvgehl2cpyp&ep=v1_gifs_search&rid=200w.gif&ct=g',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202406/1011/8bf6908bc4a21488c7bfa3bbf75ceca8f4c5137bafc136ae.png',
    },
    {
        game_name: 'EA Sports: College Football 25',
        game_price: 39.99,
        game_gif: 'https://media.tenor.com/8ZVqsTjCtLgAAAAC/ohio-state-football-college-football-25.gif',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202408/2112/6db314e57a2440ba6ff830a195c2d3f384d1175eebc93fd9.png',
    },
    {
        game_name: 'Black Myth: Wukong',
        game_price: 39.99,
        game_gif: 'https://i.gyazo.com/d3200e41fd84d3c760a37c113e380245.gif',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202405/2117/bd406f42e9352fdb398efcf21a4ffe575b2306ac40089d21.png',
    },
    {
        game_name: 'Tekken 8',
        game_price: 19.99,
        game_gif: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/tekken-8/0/08/T8_Kaz_HeatSmash.gif?width=640',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202308/0312/aff71a0ced271048f5079b1fcf715bcb45110efc13e9704a.png',
    },
    {
        game_name: 'God of War Ragnarök',
        game_price: 24.99,
        game_gif: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/extras/INT9_PC_Valhalla_Montage.gif?t=1728067832',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png',
    },
    {
        game_name: 'Mortal Kombat 1',
        game_price: 24.99,
        game_gif: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2x1MDJ1c2lzNndqZ3d1b3kyN3gxeTcyb3drbGtncHJqaDU5ajZlOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QxnI5GOpnnQZwImeqh/giphy.gif',
        game_img: 'https://image.api.playstation.com/vulcan/ap/rnd/202305/1515/93797636f47b37b74e9d3740e17ae1306aaf539c7952a703.jpg',
    },
    {
        game_name: "Marvel's Spiderman 2",
        game_price: 39.99,
        game_gif: 'https://i.makeagif.com/media/10-12-2023/dDrfS7.gif',
        game_img: 'https://m.media-amazon.com/images/I/81WUPcfQ9OL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        game_name: "Ghost of Tsushima: Director's Cut",
        game_price: 29.99,
        game_gif: 'https://media.tenor.com/TCBvPlkAwC0AAAAM/ghost-of-tsushima-video-game.gif',
        game_img: 'https://gamebroslb.com/cdn/shop/products/image_53fd8473-3b4a-49ae-9501-369a9acf9abc.webp?v=1659994132',
    },
    {
        game_name: 'Elden Ring',
        game_price: 39.99,
        game_gif: 'https://i.makeagif.com/media/11-07-2021/s4K2Zt.gif',
        game_img: 'https://m.media-amazon.com/images/I/81h2WhI4dtL._AC_UF1000,1000_QL80_.jpg',
    },
    {
        game_name: "Assassin's Creed: Shadows",
        game_price: 44.99,
        game_gif: 'https://media2.giphy.com/media/JBzWx7tz59BXJ3w7Uw/giphy-downsized.gif',
        game_img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdmuTIfP7YWN5virazuWh6cEcwz8ASSjs8B2LpxIVyVAwdx6_lI0Av77qOfPwSvoWvONaHP0G14crFJRwEMobnFRzIyGg7WYupeEwd22g&usqp=CAc',
    },
    {
        game_name: 'Street Fighter 6',
        game_price: 19.99,
        game_gif: 'https://miro.medium.com/v2/resize:fit:1200/1*IJ0rJqoWZZ2NfV-IniTW5Q.gif',
        game_img: 'https://m.media-amazon.com/images/I/81TOOo9I-CL._AC_UF894,1000_QL80_.jpg',
    },
    {
        game_name: 'WWE 2k24',
        game_price: 39.99,
        game_gif: 'https://i.makeagif.com/media/11-07-2021/s4K2Zt.gif',
        game_img: 'https://m.media-amazon.com/images/I/81h2WhI4dtL._AC_UF1000,1000_QL80_.jpg',
    },
    
    
]




exports.seed = async function(knex){
    await knex('xbox_games').insert(gameList)
    await knex('playstation_games').insert(gameList)
    await knex('consoles').insert(consoleList)
    
}