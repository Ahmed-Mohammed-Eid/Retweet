import classes from "./Description.module.scss";
import Hint from "@/app/components/Listings/Hint/Hint";

export default function Description({
                                        lang,
                                        title,
                                        setTitle = () => {},
                                        description,
                                        setDescription = () => {},
                                    }) {
    return (
        <div className={`${classes.DescriptionPart} p-12 rounded bg-white`}>
            <h2>
                {lang === 'en' ? 'Description' : 'وصف'}
            </h2>
            <Hint
                texts={lang === 'en' ? ['Describe the listing in more details you want people to know', 'Details increase your chance of getting the right buyer'] : ['صف القائمة بمزيد من التفاصيل التي تريد أن يعرفها الناس', 'التفاصيل تزيد من فرصتك في الحصول على المشتري المناسب']}
                lang={lang}
            />

            <div className={'flex flex-col gap-2 mt-8'}>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'title'}>{lang === 'en' ? 'Listing Title' : 'عنوان القائمة'}</label>
                    <input
                        type="text"
                        id={'title'}
                        placeholder={lang === 'en' ? 'Listing Title' : 'عنوان القائمة'}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        autoComplete={'off'}
                    />
                    <span className={'hint'}>0-100</span>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label htmlFor={'description'}>{lang === 'en' ? 'Listing Description' : 'وصف القائمة'}</label>
                    <textarea
                        id={'description'}
                        placeholder={lang === 'en' ? 'Listing Description' : 'وصف القائمة'}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        autoComplete={'off'}
                    />
                    <span className={'hint'}>0-5000</span>
                </div>
            </div>
        </div>
    )
}