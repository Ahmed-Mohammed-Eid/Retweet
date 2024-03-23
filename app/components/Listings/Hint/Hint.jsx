import Image from "next/image";
import classes from './Hint.module.scss';

export default function Hint({texts = [], lang}) {
    return (
        <div className={`${classes.Hint}`}>
            <Image src="/assets/listings/instructions.svg" alt="hint" width={48} height={48}/>
            <div className={`${classes.Hint__texts} ${lang === 'ar' ? 'ml-auto' : ''}`} dir={lang === 'en' ? 'ltr' : 'rtl'}>
                {
                    texts.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))
                }
            </div>
        </div>
    )
}