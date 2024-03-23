import classes from "@/app/components/Listings/Forms/RealEstateForm/RealEstateForm.module.scss";
import {useRouter} from "next/navigation";

export default function CategoryInfo({
                                         lang,
                                         categoryName,
                                         subCategoryName,
                                     }) {


    // ROUTER
    const router = useRouter();


    return (
        <div className={`${classes.CategoryPart} p-12 rounded`}>
            <h2>
                {lang === 'en' ? 'Category' : 'الفئة'}
            </h2>
            <p>
                <span>{lang === 'en' ? `You are adding a ${categoryName} in the ${subCategoryName} category` : `أنت تضيف ${categoryName} في فئة ${subCategoryName}`}</span>
                <span
                    onClick={() => router.push('/listings/select-category')}
                >
                        {lang === 'en' ? 'Change' : 'تغيير'}
                    </span>
            </p>
        </div>
    )
}