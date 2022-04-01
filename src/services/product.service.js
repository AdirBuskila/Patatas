const deliveryFee = 15

export const productService = {
    query,
    get,
    getTotalPrice,
    getCartSubTotal,
    getCartTotal,
    getAddonClass,
}

async function query() {
    return data
}

async function get(id) {
    const product = data.filter(currProduct => currProduct._id === id)[0]
    return product
}

function getAddonClass(addonsArray, addon) {
    let addonMap = addonsArray.map(currAddon => {
        return currAddon.name === addon.name
    })
    if (addonMap.indexOf(true) !== -1) {
        return 'addon-preview selected flex pointer'
    } else {
        return 'addon-preview flex pointer'
    }

}


function getTotalPrice(product) {
    let total = product.price
    product.addons.forEach((addon) => {
        total += addon.value
    })
    return total
}

function getCartSubTotal(cart) {
    let total = 0
    cart.forEach(item => {
        total += getTotalPrice(item)
    })
    return total
}
function getCartTotal(cart) {
    let total = deliveryFee
    cart.forEach(item => {
        total += getTotalPrice(item)
    })
    return total
}


const data = [
    {
        _id: 'plvfghfghfgh5D2',
        type: 'main',
        name: 'תפוח אדמה',
        price: 31,
        inStock: true,
        description: 'כולל תוספות ללא הגבלה',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967708/Patats/tttjaqpdpguf83tny20j.jpg',
        addons: [
            { name: 'טונה', value: 2 },
            { name: 'בצל רגיל', value: 0 },
            { name: 'בצל ירוק', value: 0 },
            { name: 'סחוג', value: 0 },
            { name: 'פסטו', value: 0 },
            { name: 'פטריות פורטבלו', value: 0 },
            { name: 'פרמזן', value: 0 },
            { name: 'זיתים שחורים', value: 0 },
            { name: 'זיתים ירוקים', value: 0 },
            { name: 'רוטב אלפרדו רגיל', value: 0 },
            { name: 'רוטב אלפרדו על בסיס פסטו', value: 0 },
            { name: 'גבינה צהובה', value: 0 },
            { name: 'מוצרלה', value: 0 },
            { name: 'עגבנייה', value: 0 },
            { name: 'ביצה קשה', value: 3 },
            { name: 'תירס', value: 0 },
            { name: 'חמאה', value: 0 },
            { name: 'חלומי', value: 5 },
            { name: 'הקרמה', value: 4 },
            { name: 'גבינה טבעונית', value: 3 },
            { name: 'גבינה בולגרית', value: 2 },
            { name: 'שעועית אדומה', value: 0 },
            { name: 'ביצת עין', value: 3 },
            { name: 'טחינה', value: 0 },
            { name: 'רוטב שקשוקה ללא ביצה (לטבעונים)', value: 2 },
            { name: "צ'דר", value: 7 },
        ]
    },
    {
        _id: 'plzxczxcv5D2',
        type: 'main',
        name: 'בטטה',
        price: 32,
        inStock: true,
        description: 'כולל תוספות ללא הגבלה',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967708/Patats/tttjaqpdpguf83tny20j.jpg',
        addons: [
            { name: 'טונה', value: 2 },
            { name: 'בצל רגיל', value: 0 },
            { name: 'בצל ירוק', value: 0 },
            { name: 'סחוג', value: 0 },
            { name: 'פסטו', value: 0 },
            { name: 'פטריות פורטבלו', value: 0 },
            { name: 'פרמזן', value: 0 },
            { name: 'זיתים שחורים', value: 0 },
            { name: 'זיתים ירוקים', value: 0 },
            { name: 'רוטב אלפרדו רגיל', value: 0 },
            { name: 'רוטב אלפרדו על בסיס פסטו', value: 0 },
            { name: 'גבינה צהובה', value: 0 },
            { name: 'מוצרלה', value: 0 },
            { name: 'עגבנייה', value: 0 },
            { name: 'ביצה קשה', value: 3 },
            { name: 'תירס', value: 0 },
            { name: 'חמאה', value: 0 },
            { name: 'חלומי', value: 5 },
            { name: 'הקרמה', value: 4 },
            { name: 'גבינה טבעונית', value: 3 },
            { name: 'גבינה בולגרית', value: 2 },
            { name: 'שעועית אדומה', value: 0 },
            { name: 'ביצת עין', value: 3 },
            { name: 'טחינה', value: 0 },
            { name: 'רוטב שקשוקה ללא ביצה (לטבעונים)', value: 2 },
            { name: "צ'דר", value: 7 },
        ]
    },
    {
        _id: 'plvasdasdffff5D2',
        type: 'main',
        name: 'מיקס תפוא ובטטה',
        price: 33,
        inStock: true,
        description: 'כולל תוספות ללא הגבלה',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967708/Patats/tttjaqpdpguf83tny20j.jpg',
        addons: [
            { name: 'טונה', value: 2 },
            { name: 'בצל רגיל', value: 0 },
            { name: 'בצל ירוק', value: 0 },
            { name: 'סחוג', value: 0 },
            { name: 'פסטו', value: 0 },
            { name: 'פטריות פורטבלו', value: 0 },
            { name: 'פרמזן', value: 0 },
            { name: 'זיתים שחורים', value: 0 },
            { name: 'זיתים ירוקים', value: 0 },
            { name: 'רוטב אלפרדו רגיל', value: 0 },
            { name: 'רוטב אלפרדו על בסיס פסטו', value: 0 },
            { name: 'גבינה צהובה', value: 0 },
            { name: 'מוצרלה', value: 0 },
            { name: 'עגבנייה', value: 0 },
            { name: 'ביצה קשה', value: 3 },
            { name: 'תירס', value: 0 },
            { name: 'חמאה', value: 0 },
            { name: 'חלומי', value: 5 },
            { name: 'הקרמה', value: 4 },
            { name: 'גבינה טבעונית', value: 3 },
            { name: 'גבינה בולגרית', value: 2 },
            { name: 'שעועית אדומה', value: 0 },
            { name: 'ביצת עין', value: 3 },
            { name: 'טחינה', value: 0 },
            { name: 'רוטב שקשוקה ללא ביצה (לטבעונים)', value: 2 },
            { name: "צ'דר", value: 7 },
        ]
    },
    {
        _id: 'plv5dfgdfgD2',
        type: 'soup',
        name: 'מרק בטטה',
        price: 27,
        inStock: true,
        description: "עם מבחר תוספות לבחירה: גבינה צהובה, גבינה בולגרית, טונה, בצל רגיל, בצל ירוק, סחוג, פסטו, פטריות פורטובלו, פרמז'ן, זיתים ירוקים, זיתים שחורים, רוטב אלפרדו רגיל, רוטב אלפרדו על בסיס פסטו, ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967707/Patats/wcowtantvwgranbctq0v.jpg',
        addons: []
    },
    {
        _id: 'pasdasdlv5D2',
        type: 'special',
        name: 'בייגל טוסט',
        price: 28,
        inStock: true,
        description: "עם מבחר תוספות לבחירה: גבינה צהובה, גבינה בולגרית, טונה, בצל רגיל, בצל ירוק, סחוג, פסטו, פטריות פורטובלו, פרמז'ן, זיתים ירוקים, זיתים שחורים, רוטב אלפרדו רגיל, רוטב אלפרדו על בסיס פסטו, ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967710/Patats/t7qygpmptpgvmqak9i69.jpg',
        addons: []
    },
    {
        _id: 'plv5Dqweqwe2',
        type: 'main',
        name: 'פאטאטס שקשוקה',
        price: 32,
        inStock: true,
        description: 'שקשוקה פיקנטית על תפו״א אדמה לוהט.',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967710/Patats/pv4sn4opxoccdnldyikx.jpg',
        addons: [
            { name: 'טונה', value: 2 },
            { name: 'בצל רגיל', value: 0 },
            { name: 'בצל ירוק', value: 0 },
            { name: 'סחוג', value: 0 },
            { name: 'פסטו', value: 0 },
            { name: 'פטריות פורטבלו', value: 0 },
            { name: 'פרמזן', value: 0 },
            { name: 'זיתים שחורים', value: 0 },
            { name: 'זיתים ירוקים', value: 0 },
            { name: 'רוטב אלפרדו רגיל', value: 0 },
            { name: 'רוטב אלפרדו על בסיס פסטו', value: 0 },
            { name: 'גבינה צהובה', value: 0 },
            { name: 'מוצרלה', value: 0 },
            { name: 'עגבנייה', value: 0 },
            { name: 'ביצה קשה', value: 3 },
            { name: 'תירס', value: 0 },
            { name: 'חמאה', value: 0 },
            { name: 'חלומי', value: 5 },
            { name: 'הקרמה', value: 4 },
            { name: 'גבינה טבעונית', value: 3 },
            { name: 'גבינה בולגרית', value: 2 },
            { name: 'טחינה', value: 0 },
        ]

    },
    {
        _id: 'plvqweqwe5D2',
        type: 'special',
        name: 'כרובית מטוגנת',
        price: 35,
        inStock: true,
        description: '',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967710/Patats/v2aoqctpg0zfpf1lmpih.jpg',
        addons: []
    },
    {
        _id: 'plqvccccc5Dasdas2',
        type: 'special',
        name: 'סלט בהרכבה',
        price: 33,
        inStock: true,
        description: '',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967705/Patats/d7tpu5gjzcvv8jyuevak.jpg',
        addons: []
    },
    {
        _id: 'pwwwwlvqqq5Deeee2',
        type: 'special',
        name: 'אצבעות תירס',
        price: 23,
        inStock: true,
        description: '',
        img: '',
        addons: []
    },
    {
        _id: 'pdddlvdds5Dffff2',
        type: 'special',
        name: "צ'יפס פאטאטס",
        price: 28,
        inStock: true,
        description: "תוספות בתשלום: בולגרית (4 ₪), צ'דר (7 ₪), תוספת הקרמה בעלות 4 ₪.",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967707/Patats/il2oyqs7rlpxuff9vwbo.jpg',
        addons: [
            { name: 'תוספת הקרמה', value: 4 },
            { name: 'בולגרית', value: 4 },
            { name: "צ'דר", value: 4 }
        ]
    },
    {
        _id: 'fffplvd5D2ssss',
        type: 'special',
        name: "צ'יפס בטטה",
        price: 28,
        inStock: true,
        description: "תוספות בתשלום: בולגרית (4 ₪), צ'דר (7 ₪), תוספת הקרמה בעלות 4 ₪.",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967708/Patats/ksqfhvatiedophmmxyos.jpg',
        addons: [
            { name: 'תוספת הקרמה', value: 4 },
            { name: 'בולגרית', value: 4 },
            { name: "צ'דר", value: 4 }
        ]
    },
    {
        _id: 'pslvs5fdD2',
        type: 'special',
        name: "מיקס פאטאטס",
        price: 33,
        inStock: true,
        description: "מיקס של צ'יפס בטטה וצ'יפס רגיל. תוספות בתשלום: בולגרית (4 ₪), צ'דר (7 ₪), תוספת הקרמה בעלות 4 ₪.",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967710/Patats/t0wsjoauop9987skyiez.jpg',
        addons: [
            { name: 'תוספת הקרמה', value: 4 },
            { name: 'בולגרית', value: 4 },
            { name: "צ'דר", value: 4 }
        ]

    },
    {
        _id: 'plvsdfsdf5D2',
        type: 'special',
        name: 'פסטה פנה',
        price: 41,
        inStock: true,
        description: "רטבים לבחירה: אלפרדו / רוזה. מוגש עם תוספת לבחירה: בצל / פטריות / מוצרלה / פרמז'ן, ניתן להוסיף תוספות בתשלום.",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967707/Patats/mchwyqnk1wtibbqxylpp.jpg',
        addons: [
            { name: 'אלפרדו', value: 0 },
            { name: 'רוזה', value: 0 },
            { name: 'בצל', value: 0 },
            { name: 'פטריות', value: 0 },
            { name: 'מוצרלה', value: 0 },
            { name: "פרמז'ן", value: 0 },
            { name: "הקרמה", value: 4 },
            { name: "בטטה", value: 7 },
        ]

    },
    {
        _id: 'plvsdfsddfgdfgff5D2',
        type: 'special',
        name: "ארנצ'יני",
        price: 33,
        inStock: true,
        description: "תוספות לבחירה: רוטב אלפרדו / רוטב אלפרדו פסטו / פרמז'ן / בצל ירוק. ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967708/Patats/ipvfzxqwiykwj95o2ceo.jpg',
        addons: [
            { name: 'אלפרדו', value: 0 },
            { name: 'אלפרדו פסטו', value: 0 },
            { name: "פרמז'ן", value: 0 },
            { name: 'בצל ירוק', value: 0 },
        ]

    },
    {
        _id: 'plv323232cvcv5D2',
        type: 'desert',
        name: "אצבעות וופל בלגי",
        price: 0,
        inStock: true,
        description: "מוגש עם שוקולד לבן, שוקולד חום, קצפת וסוכריות. 3 יח'- 25 ₪ / 5 יח'- 35 ₪.",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1647967705/Patats/ul9yi5gamisachww2pmd.jpg',
        addons: [
            { name: '3 יחידות', value: 25 },
            { name: '5 יחידות', value: 35 }
        ]

    },
    {
        _id: 'pdebgdhnh',
        type: 'drink',
        name: "פחית קוקה קולה",
        price: 9,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330381/Patats/ueey1qdlf5euaqxjy4yz.png',
        addons: [
        ]
    },
    {
        _id: 'kgopbnbnyd',
        type: 'drink',
        name: "פחית קולה זירו",
        price: 9,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330418/Patats/yzdigsoqyftzdakwhfgw.png',
        addons: [
        ]
    },
    {
        _id: 'psdsdebgd',
        type: 'drink',
        name: "פחית ספרייט",
        price: 9,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648331134/Patats/kqr1zyb2mcflnikjernh.png',
        addons: [
        ]
    },
    {
        _id: 'kgopgfgfyd',
        type: 'drink',
        name: "פחית ספרייט זירו",
        price: 9,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648331061/Patats/fbyb9gr7vy9mefoesd4b.png',
        addons: [
        ]
    },
    {
        _id: 'pdedfdbgd',
        type: 'drink',
        name: "פחית פאנטה",
        price: 9,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330381/Patats/pv2rh8oxi8op0lfl0nmf.png',
        addons: [
        ]
    },
    {
        _id: 'kg45opyd',
        type: 'drink',
        name: "קוקה קולה 0.5 ליטר",
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648331079/Patats/o3izsfvk6t2id9kq62gu.png',
        addons: [
        ]
    },
    {
        _id: 'pdeb12gd',
        type: 'drink',
        name: "קולה זירו 0.5 ליטר",
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648331057/Patats/uca7vurhxvscapwoqsf1.png',
        addons: [
        ]
    },
    {
        _id: 'kgopyd',
        type: 'drink',
        name: "פאנטה 0.5 ליטר",
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648331086/Patats/b64wtzswhjhwenfaiczb.png',
        addons: [
        ]
    },
    {
        _id: 'kqwxgoyd',
        type: 'drink',
        name: "פיוזטי אפרסק 0.5 ליטר",
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330381/Patats/dojuu3puqentlmza5dud.png',
        addons: [
        ]
    },
    {
        _id: 'kgpijhgopyd',
        type: 'drink',
        name: "נביעות אפרסק 0.5 ליטר",
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330418/Patats/fxfxmal5th0fmkkzj7rn.png',
        addons: [
        ]
    },
    {
        _id: 'kgozsdfpyd',
        type: 'drink',
        name: "נביעות תפוח 0.5 ליטר",
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330418/Patats/f5cjlkclzwnnot5zhivv.png',
        addons: [
        ]
    },
    {
        _id: 'kgophuoiphyd',
        type: 'drink',
        name: "נביעות ענבים 0.5 ליטר",
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330382/Patats/sxwsvcmyerekcirvgpwv.png',
        addons: [
        ]
    },
    {
        _id: 'qaswrf',
        type: 'drink',
        name: 'סודה 330 מ"ל',
        price: 7,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330382/Patats/azineiipxso0gaoup75d.png',
        addons: [
        ]
    },
    {
        _id: 'loikyh',
        type: 'drink',
        name: 'פריגת ענבים 330 מ"ל',
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330381/Patats/vcivhvejhaapabmlgeim.png',
        addons: [
        ]
    },
    {
        _id: 'tgrfed',
        type: 'drink',
        name: 'פריגת תפוזים 330 מ"ל',
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330382/Patats/ezebd4nafla5fccnrune.png',
        addons: [
        ]
    },
    {
        _id: 'crhttersfd',
        type: 'drink',
        name: 'מים מינרליים 0.5 ליטר',
        price: 8,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330382/Patats/adiwyceu7km7brfzx3b6.png',
        addons: [
        ]
    },
    {
        _id: 'oiukjgfds',
        type: 'drink',
        name: 'בירה שחורה 0.5 ליטר',
        price: 10,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330381/Patats/vlyekywrylgqqxelw4vi.png',
        addons: [
        ]
    },
    {
        _id: 'tervsad',
        type: 'drink',
        name: 'בירה קרלסברג',
        price: 15,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330382/Patats/yghjlckhtetggjuactqh.png',
        addons: [
        ]
    },
    {
        _id: 'aqmjfgyj',
        type: 'drink',
        name: 'בירה טובורג',
        price: 15,
        inStock: true,
        description: " ",
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1648330381/Patats/mivvzmgjeq9uyflxnoz2.png',
        addons: [
        ]
    },
]