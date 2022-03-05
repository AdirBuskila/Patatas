
export const productService = {
    query,
    get,
    getProductBrandImg,
}

async function query(filterBy = { type: 'ALL' }) {
    let products = data
    switch (filterBy.type) {
        case 'ALL':
            break;
        case 'APPLE':
            products = data.filter(product => product.brand === 'apple' && product.name.includes('iPhone'))
            break;
        case 'SAMSUNG':
            products = data.filter(product => product.name.includes('Samsung') && product.type === 'phone')
            break;
        case 'XIAOMI':
            products = data.filter(product => product.name.includes('Xiaomi') && product.type === 'phone')
            break;
        case 'ELECTRONICS':
            products = data.filter(product => product.tags.includes('electronics'))
            break;
        case 'GAMING':
            products = data.filter(product => product.type.includes('gaming'))
            break;
        case 'IPHONE':
            products = data.filter(product => product.name.includes('iPhone'))
            break;
        case 'IPHONE-13':
            products = data.filter(product => product.name.includes('iPhone 13'))
            break;
        case 'IPHONE-12':
            products = data.filter(product => product.name.includes('iPhone 12'))
            break;
    }
    return products
}

async function get(id) {
    const product = data.filter(currProduct => currProduct._id === id)[0]
    return product
}

function getProductBrandImg(brand) {
    let img
    switch (brand) {
        case 'apple':
            img = 'https://res.cloudinary.com/dubjerksn/image/upload/v1646491690/Phone%204%20U/ruxh82eletxxxk6avb1k.png'
            break;
        case 'samsung':
            img = 'https://d3m9l0v76dty0.cloudfront.net/system/photos/459217/small/e635ba00c69426cc1e680b793fad9cc3.png?1594554637'
            break;
        case 'sony':
            img = 'https://res.cloudinary.com/dubjerksn/image/upload/v1646491400/Phone%204%20U/xjwqdybefvt82fcwus3i.png'
            break;
        case 'xiaomi':
            img = 'https://res.cloudinary.com/dubjerksn/image/upload/v1646494359/Phone%204%20U/gj5pmdos1rdykbu5faiy.png'
            break;
    }
    return img
}

const data = [
    {
        _id: 'plv5D2',
        brand: 'apple',
        type: 'phone',
        name: 'iPhone 13 256GB',
        price: 4749,
        color: 'black',
        inStock: true,
        description: 'מכשיר הדגל החדש מבית Apple אייפון 13 פרו , בעל המעבד החזק ביותר שמשנה את חוקי המשחק וטכנולוגיה מתקדמת לחווית שימוש יוצאת דופן. שילוב של עיצוב מרשים ומערך צילום מרהיב ומתקדם מאי פעם! למכשיר החדש מגוון חידושים במפרט הטכני של המכשיר, בחוזק המכשיר וזמן השימוש בו, בעיצובו ובצבעים החדשים והאלגנטיים של סדרת iPhone 13. הסמארטפון שיביא אתכם הכי רחוק שרק אפשר בעולם הטכנולוגיה.',
        tags: 'iphone iphone-13 256gb black',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033785/Phone%204%20U/ukzcs9wcnz3yjo6k0psd.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png'
        ],
    },
    {
        _id: 'KwcOfS',
        brand: 'apple',
        type: 'phone',
        name: 'iPhone 12 128GB',
        price: 3079,
        color: 'blue',
        inStock: true,
        description: 'מכשיר הדגל החדש מבית Apple אייפון 13 פרו , בעל המעבד החזק ביותר שמשנה את חוקי המשחק וטכנולוגיה מתקדמת לחווית שימוש יוצאת דופן. שילוב של עיצוב מרשים ומערך צילום מרהיב ומתקדם מאי פעם! למכשיר החדש מגוון חידושים במפרט הטכני של המכשיר, בחוזק המכשיר וזמן השימוש בו, בעיצובו ובצבעים החדשים והאלגנטיים של סדרת iPhone 13. הסמארטפון שיביא אתכם הכי רחוק שרק אפשר בעולם הטכנולוגיה.',
        tags: 'iphone iphone-12 128gb blue',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646033785/Phone%204%20U/ukzcs9wcnz3yjo6k0psd.png',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033785/Phone%204%20U/ukzcs9wcnz3yjo6k0psd.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png'
        ],
    },
    {
        _id: 'Jatc7z',
        brand: 'apple',
        type: 'phone',
        name: 'iPhone 13 Pro Max 512GB',
        price: 5949,
        color: 'white',
        inStock: true,
        description: 'מכשיר הדגל החדש מבית Apple אייפון 13 פרו , בעל המעבד החזק ביותר שמשנה את חוקי המשחק וטכנולוגיה מתקדמת לחווית שימוש יוצאת דופן. שילוב של עיצוב מרשים ומערך צילום מרהיב ומתקדם מאי פעם! למכשיר החדש מגוון חידושים במפרט הטכני של המכשיר, בחוזק המכשיר וזמן השימוש בו, בעיצובו ובצבעים החדשים והאלגנטיים של סדרת iPhone 13. הסמארטפון שיביא אתכם הכי רחוק שרק אפשר בעולם הטכנולוגיה.',
        tags: 'iphone iphone-13-pro-max 512gb white',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033785/Phone%204%20U/ukzcs9wcnz3yjo6k0psd.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png'
        ],
    },
    {
        _id: 'U2brU1',
        brand: 'apple',
        type: 'phone',
        name: 'iPhone 13 Mini 128GB',
        price: 2889,
        color: 'black',
        inStock: true,
        description: 'מכשיר הדגל החדש מבית Apple אייפון 13 פרו , בעל המעבד החזק ביותר שמשנה את חוקי המשחק וטכנולוגיה מתקדמת לחווית שימוש יוצאת דופן. שילוב של עיצוב מרשים ומערך צילום מרהיב ומתקדם מאי פעם! למכשיר החדש מגוון חידושים במפרט הטכני של המכשיר, בחוזק המכשיר וזמן השימוש בו, בעיצובו ובצבעים החדשים והאלגנטיים של סדרת iPhone 13. הסמארטפון שיביא אתכם הכי רחוק שרק אפשר בעולם הטכנולוגיה.',
        tags: 'iphone iphone-13-mini 128gb black',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646033984/Phone%204%20U/fq3hwh0plophof4msomc.png',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033785/Phone%204%20U/ukzcs9wcnz3yjo6k0psd.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png'
        ],
    },
    {
        _id: 'MstiWe',
        brand: 'samsung',
        type: 'phone',
        name: 'Samsung Galaxy S22 Ultra 256GB',
        price: 3749,
        color: 'black',
        inStock: true,
        description: 'מכשיר הדגל החדש מבית Apple אייפון 13 פרו , בעל המעבד החזק ביותר שמשנה את חוקי המשחק וטכנולוגיה מתקדמת לחווית שימוש יוצאת דופן. שילוב של עיצוב מרשים ומערך צילום מרהיב ומתקדם מאי פעם! למכשיר החדש מגוון חידושים במפרט הטכני של המכשיר, בחוזק המכשיר וזמן השימוש בו, בעיצובו ובצבעים החדשים והאלגנטיים של סדרת iPhone 13. הסמארטפון שיביא אתכם הכי רחוק שרק אפשר בעולם הטכנולוגיה.',
        tags: 'samsung-galaxy s22-ultra 256gb black',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646034233/Phone%204%20U/edpxetumsggng7p1oml3.png',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033785/Phone%204%20U/ukzcs9wcnz3yjo6k0psd.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png'
        ],
    },
    {
        _id: 'FRYrNj',
        brand: 'samsung',
        type: 'phone',
        name: 'Samsung Z Flip3 5G',
        price: 3279,
        color: 'black',
        inStock: true,
        description: 'מכשיר הדגל החדש מבית Apple אייפון 13 פרו , בעל המעבד החזק ביותר שמשנה את חוקי המשחק וטכנולוגיה מתקדמת לחווית שימוש יוצאת דופן. שילוב של עיצוב מרשים ומערך צילום מרהיב ומתקדם מאי פעם! למכשיר החדש מגוון חידושים במפרט הטכני של המכשיר, בחוזק המכשיר וזמן השימוש בו, בעיצובו ובצבעים החדשים והאלגנטיים של סדרת iPhone 13. הסמארטפון שיביא אתכם הכי רחוק שרק אפשר בעולם הטכנולוגיה.',
        tags: 'samsung-galaxy flip3 black',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646034293/Phone%204%20U/fopiz1o1dfmbwfoe86uh.jpg',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033785/Phone%204%20U/ukzcs9wcnz3yjo6k0psd.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png'
        ],
    },
    {
        _id: 'zy2BwD',
        brand: 'samsung',
        type: 'phone',
        name: 'Samsung Galaxy A12 64GB',
        price: 579,
        color: 'black',
        inStock: true,
        description: 'מכשיר הדגל החדש מבית Apple אייפון 13 פרו , בעל המעבד החזק ביותר שמשנה את חוקי המשחק וטכנולוגיה מתקדמת לחווית שימוש יוצאת דופן. שילוב של עיצוב מרשים ומערך צילום מרהיב ומתקדם מאי פעם! למכשיר החדש מגוון חידושים במפרט הטכני של המכשיר, בחוזק המכשיר וזמן השימוש בו, בעיצובו ובצבעים החדשים והאלגנטיים של סדרת iPhone 13. הסמארטפון שיביא אתכם הכי רחוק שרק אפשר בעולם הטכנולוגיה.',
        tags: 'samsung-galaxy a12 64gb black',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646034783/Phone%204%20U/xrk43fdzoij9izvfkxlq.jpg',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033785/Phone%204%20U/ukzcs9wcnz3yjo6k0psd.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646033538/Phone%204%20U/clbeuwqz0ze2rtcg70zg.png'
        ],
    },
    {
        _id: 'zy34344',
        brand: 'sony',
        type: 'gaming console',
        name: 'PS5 825GB Digital Edition',
        price: 2680,
        color: 'white',
        inStock: true,
        description: 'קונסולה PlayStation 5 סוג המכשיר קונסולה שולחנית אחסון פנימי 825GB משחקי אונליין תומך משחק אונליין מהירות מעבד 3,500 MHz זיכרון RAM 16GB DVD כולל Blu-Ray מקור חשמל חיבור קבוע לחשמל מסך ללא מסך',
        tags: 'ps5 gaming console',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646489230/Phone%204%20U/gceza5r1lwoibpvypfsc.jpg',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646489230/Phone%204%20U/gceza5r1lwoibpvypfsc.jpg',
        ],
    },
    {
        _id: 'zy23sdff',
        brand: 'xiaomi',
        type: 'vaccum mop',
        name: 'Xiaomi Mi Robot Vacuum Mop',
        fullname: 'שואב אבק רובוטי שוטף Xiaomi Mi Robot Vacuum Mop Essential',
        price: 600,
        color: 'white',
        inStock: true,
        description: 'מערכת ניווט ויזואלית דינאמית | עוצמת שאיבה חזקה | סוללה עוצמתית ערכה מלאה: מיכל אבק פנימי ומיכל מים חיצוני שליטה מיישומון Mi Home בסמארטפון בעל מגוון חיישנים לפעולה ניקיון מושלמת צפייה במפת הניקיון בזמן אמת סוללה עוצמתית 3200mAh לזמן עבודה ארוך של כמעט 2 שעות מצלמת ניווט דינאמית לסריקה מרחבית גובה השואב רק 8.15 ס"מ למעבר קל תחת כל רהיט',
        tags: 'electronics vaccum',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646493343/Phone%204%20U/fywzjsvsgwtcwvd6pt8w.jpg',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646493343/Phone%204%20U/fywzjsvsgwtcwvd6pt8w.jpg',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646493707/Phone%204%20U/gilqbo52wg4yeitubb4s.jpg',
        ],
    },
    {
        _id: 'zy23sdf43sdfsdf44',
        brand: 'xiaomi',
        type: 'phone',
        name: 'Xiaomi MI 11 5G 8+128GB',
        price: 1599,
        color: 'black',
        inStock: true,
        description: 'מציגה מכשיר מדגם Mi 11 בטכנולוגית 5G. מצויד במסך 6.55" מקומר לצדדים ואיכותי כמו שעוד לא ראיתם',
        tags: 'xiaomi phone 128gb',
        img: 'https://res.cloudinary.com/dubjerksn/image/upload/v1646498467/Phone%204%20U/gegicgjfj8lrbkn31tnm.png',
        inventory: [
            { id: 'qfdts', title: 'צבע לבחירה', selectOptions: [{ name: '', id: '1', value: 0, type: 'color' }, { name: 'שחור', id: '2', value: 0, type: 'color' }, { name: 'תכלת', id: '3', value: 0, type: 'color' }] },
            { id: 'asdadfdf', title: 'Airpods', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airpod' }, { name: 'Airpods Pro 799 ₪', id: '2', value: 799, type: 'airpod' }, { name: 'Airpods 3 799 ₪', id: '3', value: 799, type: 'airpod' }, { name: 'Airpods Max 1790 ₪', id: '4', value: 1790, type: 'airpod' }] },
            { id: 'qaswe', title: 'ראש מטען מקורי', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'charger' }, { name: 'Apple 20W USB-C 119 ₪', id: '2', value: 119, type: 'charger' }] },
            { id: 'edswz', title: 'Apple AirTag', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'airtag' }, { name: 'Airtag 120 ₪', id: '2', value: 120, type: 'airtag' }] },
            { id: 'rftged', title: 'כיסוי לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'case' }, { name: 'Pure gear slim shell שקןף ₪ 79', id: '2', value: 79, type: 'case' }] },
            { id: 'edwsgt', title: 'מגן מסך לבחירה', selectOptions: [{ name: 'ללא', id: '1', value: 0, type: 'screen-protector' }, { name: 'Pure Gear מגן מסך זכוכית ₪ 79', id: '2', value: 79, type: 'screen-protector' }] },
        ],
        carousel: ['https://res.cloudinary.com/dubjerksn/image/upload/v1646498467/Phone%204%20U/gegicgjfj8lrbkn31tnm.png',
            'https://res.cloudinary.com/dubjerksn/image/upload/v1646498468/Phone%204%20U/ndb1t1do0ohwbwjzraog.png',
        ],
    },
]