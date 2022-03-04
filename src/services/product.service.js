import { utilService } from "./util.service"

export const productService = {
    query,
    get,
    getProductBrandImg,
}

async function query(filterBy = { type: 'ALL' }) {
    let products = data
    console.log('filterBy :>> ', filterBy);
    switch (filterBy.type) {
        case 'ALL':
            break;
        case 'APPLE':
            products = data.filter(product => product.brand === 'apple' && product.name.includes('iPhone'))
            break;
        case 'SAMSUNG':
            products = products
            // products = data.filter(product => product.name === 'samsung' && product.type === 'phone')
            break;
        case 'IPHONE':
            products = data.filter(product => product.name.includes('iPhone'))
            break;
        case 'IPHONE 13':
            products = data.filter(product => product.name.includes('iPhone 13'))
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
            img = 'https://d3m9l0v76dty0.cloudfront.net/system/photos/575231/small/94b541ddcff6584824b2e0bc7348156f.png?1620305134'
            break;
        case 'samsung':
            img = 'https://d3m9l0v76dty0.cloudfront.net/system/photos/459217/small/e635ba00c69426cc1e680b793fad9cc3.png?1594554637'
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
]