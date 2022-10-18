const allMatelots = [
    {
      id: 1,
      name: "Eleftheria",
      adjectif: "",
      present: false,
    },
    {
      id: 2,
      name: "Gennadios",
      adjectif: "",
      present: false,
    },
    {
      id: 3,
      name: "Lysimachos",
      adjectif: "",
      present: false,
    },
  ];
  
  const key = "react.matelots";
  
  function App() {
    //const [contacts, setContacts] = useState(data);
    const [matelotId, setMatelotId] = useState(); // retour d'un tableau : res = [matelotId, setMatelotId]
    const [matelots, setMatelots] = useState(allMatelots);
  
    // Nous permet à la création du component, de chercher dans notre storage
    useEffect(() => {
      const matelotsRetrievedFromStorage = localStorage.getItem(key);
      if (matelotsRetrievedFromStorage) {
        setMatelots(JSON.parse(matelotsRetrievedFromStorage));
      }
    }, []); // insertion d'une dépendance [] pour éviter les boucles infinies
  
    // Vient persister dans le storage notre donnée entrée
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(matelots));
    }, [matelots]);
  
    function handleStatusChange(id) {
      setMatelotId(id);
      const matelotToModify = matelots.find((matelot) => matelot.id === id);
      matelotToModify.present = !matelotToModify.present;
      const newMatelots = matelots.map((matelot) =>
        matelot.id !== id ? matelot : matelotToModify
      );
      setMatelots(newMatelots);
    }
  
    function handleMatelotCreation(name) {
      const newMatelot = {
        id: Date.now(),
        name,
        present: false,
        adjectif: "",
      };
      const allMatelot = [newMatelot, ...matelots];
      setMatelots(allMatelot);
    }
  
    return (
      <div class="form-box">
        <h1>Les Argonautes</h1>
        <h2>Ajouter un(e) Argonaute</h2>
        <p>Nom de l'Argonaute</p>
  
        <Formulaire handleMatelotCreation={handleMatelotCreation} />
  
        <h2>Membre de l'équipage</h2>
        <div class="id">Identifiant de mon matelot : {matelotId} </div>
  
        <Equipage
          class="member-item"
          matelots={matelots}
          handleStatusChange={handleStatusChange}
        />
      </div>
    );
  }