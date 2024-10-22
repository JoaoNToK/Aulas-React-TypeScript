import { useCallback, useState } from "react";

interface ITarefa {
  id: number;
  title: string;
  isCompleted: boolean;
}

export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((e) => {
      if (e.key === "Enter") {
        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;

        e.currentTarget.value = "";

        setLista((oldlista) => {
          if (oldlista.some((listItem) => listItem.title === value))
            return oldlista;

          return [
            ...oldlista,
            {
              id: oldlista.length,
              title: value,
              isCompleted: false,
            },
          ];
        });
      }
    }, []);

  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeyDown} />
      <p>{lista.filter((listIntem) => listIntem.isCompleted).length}</p>

      <ul>
        {lista.map((listIntem) => {
          return (
            <li key={listIntem.id}>
              <input
                type="checkbox"
                checked={listIntem.isCompleted}
                onChange={() => {
                  setLista((oldLista) => {
                    return oldLista.map((oldlistItem) => {
                      const newisCompleted =
                        oldlistItem.title === listIntem.title
                          ? !oldlistItem.isCompleted
                          : oldlistItem.isCompleted;
                      return {
                        ...oldlistItem,
                        isCompleted: newisCompleted,
                      };
                    });
                  });
                }}
              />
              {listIntem.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
