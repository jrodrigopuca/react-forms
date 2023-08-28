import { useState } from "react";
import { useForm } from "react-hook-form";
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
//import { Button } from "@chakra-ui/react";

import { addDays } from "date-fns";
import { es } from "date-fns/locale";

const MyForm = () => {
  const { handleSubmit } = useForm();
  const [selectedDateTime, setSelectedDateTime] = useState<Date  | null>(new Date());

  const onSubmit = async (data: any) => {
    console.log(data)
  };

  const minDate = addDays(new Date(), -1);
  const maxDate = addDays(new Date(), 1);

  const onChange = (date: Date | null) => {
    if (date instanceof Date){
      setSelectedDateTime(date)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {selectedDateTime?.toLocaleString()}
        <DateTimePicker
          onChange={onChange}
          clearIcon={null}
          value={selectedDateTime}
          minDate={minDate}
          maxDate={maxDate}
          locale={"es"}
          format="dd-MM-yyyy HH:mm:ss"
        />
          <p>Fecha seleccionada: {selectedDateTime?.toLocaleString("es-ES", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" })}</p>
      
    </form>
  );
};

export default MyForm;
