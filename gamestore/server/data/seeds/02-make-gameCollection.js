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
]




exports.seed = async function(knex){
    await knex('games').insert(gameList)
    
}