export function toDateString(date: Date) {
    const dateAndTime = date.toISOString();
    const onlyDate = dateAndTime.split("T")[0];
    return onlyDate.replace(/\-/g,"/");
}

export const today = toDateString(new Date());