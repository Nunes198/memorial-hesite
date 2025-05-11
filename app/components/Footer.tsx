export default function Footer() {
  return (
    <footer className="text-center py-4 border-t mt-8">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Todos os direitos reservados - Eco Sagrado
      </p>
    </footer>
  );
}