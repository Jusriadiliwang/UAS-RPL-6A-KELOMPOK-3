export async function getPengantaran() {
  const response = await fetch('/api/pengantaran');

  if (!response.ok) {
    throw new Error('Gagal mengambil data pengantaran');
  }

  const result = await response.json();
  return result.data ?? [];
}

export default getPengantaran;