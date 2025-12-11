import app from './App.js'

const PORT = process.env.PORT || 54850;

app.listen(PORT, "0.0.0.0", () => {
    console.log();
    console.log(`✅ Servidor rodando na porta ${PORT}`);
    console.log(`🚀 Acesse a aplicação em http://localhost:${PORT}`);
});
