import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };
  
export function DropZoneComponent(){
const onDrop = useCallback((acceptedFiles: any) =>{
    console.log(acceptedFiles)
    //these are theiles to upload
},[])

const {getRootProps, getInputProps, isDragActive, isDragAccept,isDragReject} = useDropzone({onDrop});
const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);
     
return(
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? 
            <p> Drag and drop your images here.... </p> : 
            <p> Drag 'n' drop some files here</p>
          }
        </div>
    )
}