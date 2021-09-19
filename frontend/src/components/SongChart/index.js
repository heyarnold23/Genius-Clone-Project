import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'

import {getSongs} from '../../store/songs';

import styles from './SongChart.module.css';

const SongChart = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs);
    const songsArr = Object.values(songs);

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch])


    return (
        <>
            <div className={styles.songChart}>
                    CHARTS
            </div>
            <h3 id={styles.chartsSub}>TRENDING ON UNRAVEL</h3>
            <div className={styles.chartContent}>
                <ol>
                    {songsArr.map((song) =>
                    // albumUrl, name, artistName
                    <div key={song.id} className={styles.listedSong}>
                        {/* link will eventually be the song page */}
                        <NavLink to={`/songs/${song.id}`}>
                            <li className={styles.insideSong} to='/'>
                                <div className={styles.imgHolder}>
                                    <img src={song.albumUrl} alt={song.albumName} />
                                </div>
                                <div className={styles.name}>
                                    {song.name}
                                </div>
                                <div>
                                    {song.artistName}
                                </div>
                            </li>
                        </NavLink>
                    </div>
                    )}
                </ol>
            </div>
        </>
    )


}

export default SongChart;
