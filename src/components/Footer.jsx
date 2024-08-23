import { Icon } from '../helpers/icons'

const List = ({ title, content }) => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='font-medium text-white text-lg leading-6'>{title}</p>
            <ul className='text-[#818BAD] font-normal text-sm leading-8'>
                {content.map((item, index) => (
                    <li key={index} className='cursor-pointer'>{item}</li>
                ))}
            </ul>
        </div>
    )
}

const footerItems = [
    {
        id: 1,
        title: "Salonlar",
        content: ["Kuaförler", "Berberler", "Güzellik ve Estetik", "Makyaj Stüdyoları", "Fizyoterapi Merkezleri", "Masaj ve Spa Salonları"]
    },
    {
        id: 2,
        title: "Saç",
        content: ["Fön", "Saç Kesimi", "Saç Boyama", "Saç Bakımı", "Ombre", "Gelin Saçı"]
    },
    {
        id: 3,
        title: "Tırnak",
        content: ["Pedikür", "Manikür", "Kalıcı Oje", "Protez Tırnak", "Jel Tırnak", "Nail Art"]
    },
    {
        id: 4,
        title: "Makyaj",
        content: ["Klasik Makyaj", "Profesyonel Makyaj", "Gelin Makyajı", "Kirpik Lifting", "İpek Kirpik", "Kaş Laminasyonu"]
    },
    {
        id: 5,
        title: "Yüz",
        content: ["Klasik Cilt Bakımı", "Profesyonel Cilt Bakımı", "Kaş Alma", "Dudak üstü", "Ağda (Yüz)"]
    },
    {
        id: 6,
        title: "Erkek",
        content: ["Erkek Saç Kesimi", "Sakal Tıraşı", "Erkek Saç Boyama", "Erkek Cilt Bakımı", "Erkek Ağda", "Erkek Epilasyon"]
    },
    {
        id: 7,
        title: "Vücut",
        content: ["Vücut Bakımı", "Ağda (Tüm Vücut)", "Ağda (Bölgesel)", "Bölgesel İncelme", "Solaryum"]
    }
];


const Footer = () => {
    return (
        <div className='flex justify-center font-beausite'>
            <div className='max-w-[1920px] w-full h-[601px] flex flex-col'>
                <div className="w-full h-4">
                    <span className="w-full h-full">
                        <Icon name="NavbarGradient" />
                    </span>
                </div>
                <div className='w-full h-[505px] bg-[#0C0020] flex flex-col items-center justify-center gap-[50px]'>
                    <div className='max-w-[1240px] w-full h-10 flex justify-between items-center'>
                        <div className='max-w-[646.63px] w-full h-8 flex items-center justify-between'>
                            <span>
                                <Icon name='FooterRezzin' />
                            </span> 
                            <span className='w-4 border-[1.5px] border-white'></span>
                            <p className='text-white font-medium text-sm leading-6'>Rezz.in ile Planlayın, Kolaylaştırın, Hayatın Her Anını Keyifle Yaşayın!</p>
                        </div>
                        <div className='max-w-[294px] w-full h-full flex items-center justify-between'>
                            <p className='text-white font-medium text-sm leading-6'>Sosyal Medya’da Biz</p>
                            <div className='w-36 h-full flex justify-between items-center'>
                                <a href='https://www.facebook.com/' target='_blank' rel="noreferrer">
                                    <Icon name='FooterFacebook' />
                                </a>
                                <a href='https://www.instagram.com/' target='_blank' rel="noreferrer">
                                    <Icon name='FooterInstagram' />
                                </a>
                                <a href='https://x.com/' target='_blank' rel="noreferrer">
                                    <Icon name='FooterTwitter' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <span className='max-w-[1320px] w-full h-[1px] bg-white bg-opacity-15'></span>
                    <div className='max-w-[1236px] w-full h-[232px] flex justify-between'>
                        {footerItems.map(item => (
                            <List 
                                key={item.id}
                                title={item.title}
                                content={item.content}
                            />
                        ))}
                    </div>
                </div>

                <div className='w-full h-20 bg-[#0C021C] flex justify-center items-center'>
                    <div className='max-w-[1240px] w-full h-6 flex justify-between text-white font-medium text-sm leading-6'>
                        <p>© 2024 Rezz.in - Tüm Hakları Gizlidir.</p>
                        <div className='max-w-[403px] w-full h-full flex items-center justify-between mr-[175px]'>
                            <span className='cursor-pointer'>Hakkımızda</span>
                            <span className='w-1.5 h-1.5 rounded-full bg-white bg-opacity-15'></span>
                            <span className='cursor-pointer'>S.S.S</span>
                            <span className='w-1.5 h-1.5 rounded-full bg-white bg-opacity-15'></span>
                            <span className='cursor-pointer'>Blog</span>
                            <span className='w-1.5 h-1.5 rounded-full bg-white bg-opacity-15'></span>
                            <span className='cursor-pointer'>İletişim</span>
                        </div>
                        <p className='text-[#818BAD] cursor-pointer'>Sözleşmeler</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer