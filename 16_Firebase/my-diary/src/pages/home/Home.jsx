import styles from "./Home.module.css";
import DiaryForm from "./DiaryForm";
import DiaryList from "./DiaryList";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

export default function Home() {
    const { user } = useAuthContext();
    // 현재 로그인한 유저의 collection만 불러오겠다~
    const { documents, error } = useCollection("myDiary", [
        "uid",
        "==",
        user.uid,
    ]);

    return (
        <main className={styles.cont}>
            <aside className={styles.side_menu}>
                <DiaryForm uid={user.uid} />
            </aside>
            <ul className={styles.content_list}>
                {error && <strong>{error}</strong>}
                {documents && <DiaryList diaries={documents} />}
            </ul>
        </main>
    );
}