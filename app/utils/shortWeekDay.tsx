interface getShortWeekDayProps {
    day: string;
}

const getShortWeekDay: React.FC<getShortWeekDayProps> = ({day}) => {
    const shortWeekDay = new Date(day).toLocaleDateString(
        "en-US", { 
            weekday: "short", 
        }
    );
    return shortWeekDay;
};

export default getShortWeekDay;
