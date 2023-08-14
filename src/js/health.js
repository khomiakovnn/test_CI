export default function health(persona) {
  let status;
  if (persona.health < 15) {
    status = 'critical';
  }
  if (persona.health > 50) {
    status = 'healthy';
  }
  if (persona.health <= 50 && persona.health >= 15) {
    status = 'wounded';
  }
  return status;
}
