import React, { useEffect, useState } from "react";

import { Timestamp, addDoc, collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../../firebase";

import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = ({ input, title }) => {
    const [file, setFile] = useState(null);
    const [data, setData] = useState({});
    const [perc, setPerc] = useState(null);

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setPerc(progress);
                console.log('Upload is ' + progress + '% done');
            }, (error) => {
                console.error('Error during file upload:', error);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData((prev) => ({ ...prev, img: downloadURL }));
                });
            });
        };
        if (file) uploadFile();
    }, [file]);

    const handleInput = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setData((prev) => ({ ...prev, [id]: value }));
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp()
            });
        } catch (err) {
            console.error('Error adding user:', err);
        }
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <div className="top">
                    <h1 className="title">{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleAdd}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    UPLOAD IMAGE: <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>
                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />
                            </div>
                            {input.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    <input
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
                                    />
                                </div>
                            ))}
                            <button disabled={perc !== null && perc < 100} type="submit">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;
