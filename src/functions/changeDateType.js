const changeDateType = (date) => {
    const dateArr = date.split("T");
    return `${dateArr[0].split("-")[2]}-${dateArr[0].split("-")[1]}-${dateArr[0].split("-")[0]}`
}

export default changeDateType;