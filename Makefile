restart:
	docker compose restart base_webpack

logs:
	docker compose logs -f --tail=50 base_webpack