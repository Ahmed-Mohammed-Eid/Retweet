import Image from "next/image";
import classes from './Hint.module.scss';

export default function Hint({texts = []}) {
    return (
        <div className={`${classes.Hint}`}>
            <Image src="/assets/listings/instructions.svg" alt="hint" width={48} height={48}/>
            <div className={`${classes.Hint__texts}`}>
                {
                    texts.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))
                }
            </div>
        </div>
    )
}