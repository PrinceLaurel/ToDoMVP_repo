```mermaid
flowchart TB;
    A[Start]-->B[Klicka lägg till];
    B-->C[Ange detaljer för uppgiften text + datum];
    C-->D[Klicka spara];
    D-->E[Done];
    D-->|Frontend|F[Updatera UI];
    D-->|Backend|G[API anrop POST task];
    G-->H[Spara i DB];
    F-->E;
    H-->E;
 ```