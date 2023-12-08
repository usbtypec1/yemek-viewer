const getWeekday = date => {
    const dayNames = [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
    ]
    return dayNames[date.getDay()]
}
const getMonthName = date => {
    const monthNames = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ]
    return monthNames[date.getMonth()]
}
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()} ${getMonthName(date)} (${getWeekday(date)})`
}