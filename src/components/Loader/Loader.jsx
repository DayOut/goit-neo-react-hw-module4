import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.loader}>
            <Oval
                height={80}
                width={80}
                color="#3f51b5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#b2baf6"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
    );
};