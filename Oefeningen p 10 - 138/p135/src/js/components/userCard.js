export function userCard(user) {
    return `
<div class="card mb-2">
<div class="card-body">
<h5>${user.name}</h5>
<p class="m-0">${user.email}</p>
<small>${user.website}</small>
</div>
</div>
`;
}